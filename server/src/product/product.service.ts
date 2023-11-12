import { JwtService } from '@nestjs/jwt';
import { AddRatingDto } from './dto/addRating.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { CreateProguctDto } from './dto/create-product.dto';
import { CreateWriterDto } from './dto/create-writer.dto';
import { Genre } from './models/genre.model';
import { Product } from './models/product.model';
import { writer } from './models/writer.model';
import { Rating } from './models/rating.model';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Genre) private genreRepository: typeof Genre,
        @InjectModel(writer) private writerRepository: typeof writer,
        @InjectModel(Product) private productRepository: typeof Product,  
        private fileService: FilesService,
        @InjectModel(Rating) private ratingRepositoty: typeof Rating,
        private jwtService: JwtService,
    ){}

//////// Жанр
    async createGenre(dto: CreateGenreDto){
        const genre = await this.genreRepository.create(dto);
        return genre;
    }

    async getAllGenres(){
        const genres = await this.genreRepository.findAll({include: {all: true}});
        return genres;
    }



//////// Автор
    async createWriter(dto: CreateWriterDto){
        const writer = await this.writerRepository.create(dto);
        return writer;
    }

    async getAllWriters(){
        const writers = await this.writerRepository.findAll({include: {all: true}});
        return writers;
    }


//////// Товар
    async createProduct(dto: CreateProguctDto, image: any){
        const fileName = await this.fileService.createFile(image);
        let product
         = await this.productRepository.create({...dto, image: fileName})
        product.titleLowerCase = product.title.toLowerCase();
        await product.save();
        return product;
    }

    async updateProduct(dto: CreateProguctDto,  id: string, image: any){
        let product
         = await this.productRepository.findOne({where: {id}})
        product 
        product.title = dto.title;
        product.price = dto.price;
        product.writerId = dto.writerId;
        product.genreId = dto.genreId;

        if(image){
            product.image = await this.fileService.createFile(image);
        }

        product.titleLowerCase = product.title.toLowerCase();
        await product.save();
        return product;
    }

    async getAllProducts(req: any) {
        let {writerId, genreId, limit, page, titleLowerCase} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit
        let product;

        if(!titleLowerCase){
            if (!writerId && !genreId) {
                product = await this.productRepository.findAndCountAll(
                    {include: [
                        {
                            model: writer,
                            required: true
                        },
                        {
                            model: Genre,
                            required: true
                        }
                    ], limit, offset}
                );
            }
            if (writerId && !genreId) {
                product = await this.productRepository.findAndCountAll(
                    {where: {writerId}, 
                    include: [
                        {
                            model: writer,
                            required: true
                        },
                        {
                            model: Genre,
                            required: true
                        }
                    ]
                    , limit, offset}
                );
            }
            if (!writerId && genreId) {
                product = await this.productRepository.findAndCountAll(
                    {where: {genreId}, 
                    include: [
                        {
                            model: writer,
                            required: true
                        },
                        {
                            model: Genre,
                            required: true
                        }
                    ], 
                    limit, 
                    offset}
                );
            }
            if (writerId && genreId) {
                product = await this.productRepository.findAndCountAll(
                    {where: {genreId, writerId}, 
                    include: [
                        {
                            model: writer,
                            required: true
                        },
                        {
                            model: Genre,
                            required: true
                        }
                    ], limit, offset}
                );
            }
        } else {
            product = await this.productRepository.findAndCountAll(
                {where: {titleLowerCase}, include: {all: true}, limit, offset}
            );
        }
        
        
        return product;
    }

    async getOneProduct(id: number){
        const product = await this.productRepository.findOne(
            {where: {id}, include: {all: true}}
        )
        return product;
    }

    async getProductByName(req: any){
        let {writerId, genreId} = req.query;
        
        let product = await this.productRepository.findAll({
            where: {writerId, genreId}, 
            include: {all: true}
        })
        return product;
    }


    
    async removeProduct(id: string){
        const product = await this.productRepository.destroy({where: {id}})
        return product;
    }


//////////// Рейтинг
    async addRating(RatingDto: AddRatingDto, req: any){
        const {productId, rate} = RatingDto;
        const productItem = await this.getOneProduct(productId);

        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);

        if (
            typeof productId !== 'number'
            ||
            productId === null
            ||
            typeof rate !== 'number'
            ||
            rate === null
            ||
            !productItem
        ) {
            return {
                isSuccess: false
            }
        }

        const Raiting = new Rating();
        Raiting.productId = productId;
        Raiting.rate = rate
        Raiting.userId = user.id;
        await Raiting.save();

        return Raiting;
    }

    async getRatingForProduct(id: number){
        const rating = await this.ratingRepositoty.findAll({
            where: {productId: id}
        })

        return rating
    }

    async removeRatingForProduct(productId: number, req: any){
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        const product = await this.ratingRepositoty.destroy({
            where: {productId, userId: user.id}})
        return product;
    }

    async updateRatingForProduct(productId: number, dto: AddRatingDto, req: any){
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        console.log("==========" + dto.rate)
        const product = await this.ratingRepositoty.findOne({
            where: {productId, userId: user.id}
        })
        product.rate = dto.rate;
        await product.save();
        return product;
    }
}
