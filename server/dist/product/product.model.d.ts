import { Model } from "sequelize-typescript";
import { Genre } from "./genre.model";
import { writer } from "./writer.model";
import { ProductInfo } from "./productInfro.model";
import { Rating } from "./rating.model";
import { BasketProduct } from "src/basket/basketProduct.model";
interface ProductCreationAttrs {
    email: string;
    password: string;
}
export declare class Product extends Model<Product, ProductCreationAttrs> {
    id: number;
    name: string;
    price: string;
    genreId: number;
    writerId: number;
    productInfo: ProductInfo[];
    ratings: Rating[];
    BasketProduct: BasketProduct[];
    genre: Genre;
    writer: writer;
}
export {};
