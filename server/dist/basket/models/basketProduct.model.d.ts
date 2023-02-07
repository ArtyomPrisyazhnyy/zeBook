import { Model } from "sequelize-typescript";
import { Product } from "src/product/models/product.model";
import { Basket } from "./basket.model";
interface BasketProductCreationAttrs {
    email: string;
    password: string;
}
export declare class BasketProduct extends Model<BasketProduct, BasketProductCreationAttrs> {
    id: number;
    basketId: number;
    productId: number;
    basket: Basket;
    product: Product;
}
export {};
