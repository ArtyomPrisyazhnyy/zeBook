import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { writer } from "./writer.model";
interface ProductInfoCreationAttrs {
    year: number;
    writer: string;
    pageNumber: number;
    edition: string;
    writerId: number;
    userId: number;
}
export declare class ProductInfo extends Model<ProductInfo, ProductInfoCreationAttrs> {
    id: number;
    year: number;
    writer: string;
    pageNumber: number;
    edition: string;
    productId: number;
    writerId: number;
    product: Product;
    author: writer;
}
export {};
