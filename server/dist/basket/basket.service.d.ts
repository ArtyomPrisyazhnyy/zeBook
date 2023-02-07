import { JwtService } from '@nestjs/jwt';
import { ProductService } from 'src/product/product.service';
import { UsersService } from 'src/users/users.service';
import { AddProductDto } from './dto/addProduct.dto';
import { BasketItem } from './models/basket.model';
export declare class BasketService {
    private productService;
    private userService;
    private jwtService;
    private basketRepository;
    constructor(productService: ProductService, userService: UsersService, jwtService: JwtService, basketRepository: typeof BasketItem);
    addToBasket(productDto: AddProductDto, req: any): Promise<{
        isSuccess: boolean;
        basket?: undefined;
    } | {
        isSuccess: boolean;
        basket: BasketItem;
    }>;
    getBasketForUser(req: any): Promise<BasketItem[]>;
    remove(req: any, productId: any): Promise<number>;
    cleanBasket(req: any, productId: number): Promise<number>;
}
