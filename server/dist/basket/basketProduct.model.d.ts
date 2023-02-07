import { Model } from "sequelize-typescript";
import { Basket } from "./basket.model";
import { Product } from "src/product/product.model";
interface BasketProductCreationAttrs {
    email: string;
    password: string;
}
export declare class BasketProduct extends Model<BasketProduct, BasketProductCreationAttrs> {
    id: number;
    basketId: number;
    productId: number;
    author: Basket;
    product: Product;
}
export {};
