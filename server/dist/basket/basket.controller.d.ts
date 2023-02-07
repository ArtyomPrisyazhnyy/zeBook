import { BasketService } from './basket.service';
import { AddProductDto } from './dto/addProduct.dto';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    addProductToBasket(product: AddProductDto, req: any): Promise<{
        isSuccess: boolean;
        basket?: undefined;
    } | {
        isSuccess: boolean;
        basket: import("./models/basket.model").BasketItem;
    }>;
    getBasketUser(req: any): Promise<import("./models/basket.model").BasketItem[]>;
    removeProductFromBasket(req: any, productId: any): Promise<number>;
    cleanBasket(req: any, productId: any): Promise<number>;
}
