import { JwtService } from '@nestjs/jwt';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductService } from 'src/product/product.service';
import { UsersService } from 'src/users/users.service';
import { AddProductDto } from './dto/addProduct.dto';
import { BasketItem } from './models/basket.model';

@Injectable()
export class BasketService {

    constructor(
        @Inject(forwardRef(() => ProductService)) private productService: ProductService,
        @Inject(forwardRef(() => UsersService)) private userService: UsersService,
        private jwtService: JwtService,
        @InjectModel(BasketItem) private basketRepository: typeof BasketItem
    ) {}


    async addToBasket(productDto: AddProductDto, req: any){
        const {productId, writerId, genreId} = productDto;
        const productItem = await this.productService.getOneProduct(productId);

        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        
        if (
            productId === null
            ||
            !productItem
        ) {
            return {
                isSuccess: false,
            
            }
        }
        const basket = new BasketItem();        
        basket.productId = productId;
        basket.writerId = writerId;
        basket.genreId = genreId
        basket.userId = user.id;
        await basket.save();

        return {
            isSuccess: true,
            basket
        }

    }

    async getBasketForUser(req: any){
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);

        const basket = await this.basketRepository.findAll({
            where: {userId: user.id},
            include: {all: true}
        })

        return basket
    }

    async remove(req: any, productId){
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);

        if (!user) {
            throw new Error('User not found');
        }

        const basket = await this.basketRepository.destroy({
            where: {
                userId: user.id,
                productId
            }
        })
        return basket;
    }

    async cleanBasket(req: any, productId: number){
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);


        if (!user) {
            throw new Error('User not found');
        }

        const basket = await this.basketRepository.destroy({
            where: {
                userId: user.id
            }
        })
        return basket;
    }
}
