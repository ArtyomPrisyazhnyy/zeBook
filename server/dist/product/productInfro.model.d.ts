import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
interface ProductInfoCreationAttrs {
    email: string;
    password: string;
}
export declare class ProductInfo extends Model<ProductInfo, ProductInfoCreationAttrs> {
    id: number;
    title: string;
    description: string;
    productId: number;
    product: Product;
}
export {};
