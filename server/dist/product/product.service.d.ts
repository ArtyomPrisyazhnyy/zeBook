import { JwtService } from '@nestjs/jwt';
import { AddRatingDto } from './dto/addRating.dto';
import { FilesService } from 'src/files/files.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { CreateProguctDto } from './dto/create-product.dto';
import { CreateWriterDto } from './dto/create-writer.dto';
import { Genre } from './models/genre.model';
import { Product } from './models/product.model';
import { writer } from './models/writer.model';
import { Rating } from './models/rating.model';
export declare class ProductService {
    private genreRepository;
    private writerRepository;
    private productRepository;
    private fileService;
    private ratingRepositoty;
    private jwtService;
    constructor(genreRepository: typeof Genre, writerRepository: typeof writer, productRepository: typeof Product, fileService: FilesService, ratingRepositoty: typeof Rating, jwtService: JwtService);
    createGenre(dto: CreateGenreDto): Promise<Genre>;
    getAllGenres(): Promise<Genre[]>;
    createWriter(dto: CreateWriterDto): Promise<writer>;
    getAllWriters(): Promise<writer[]>;
    createProduct(dto: CreateProguctDto, image: any): Promise<Product>;
    updateProduct(dto: CreateProguctDto, id: string, image: any): Promise<Product>;
    getAllProducts(req: any): Promise<any>;
    getOneProduct(id: number): Promise<Product>;
    getProductByName(req: any): Promise<Product[]>;
    removeProduct(id: string): Promise<number>;
    addRating(RatingDto: AddRatingDto, req: any): Promise<Rating | {
        isSuccess: boolean;
    }>;
    getRatingForProduct(id: number): Promise<Rating[]>;
    removeRatingForProduct(productId: number, req: any): Promise<number>;
    updateRatingForProduct(productId: number, dto: AddRatingDto, req: any): Promise<Rating>;
}
