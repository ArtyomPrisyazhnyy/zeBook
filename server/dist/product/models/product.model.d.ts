import { Model } from "sequelize-typescript";
import { Genre } from "./genre.model";
import { writer } from "./writer.model";
import { Rating } from "./rating.model";
import { BasketItem } from "src/basket/models/basket.model";
interface ProductCreationAttrs {
    title: string;
    price: number;
    image: string;
    productionYear: number;
    genreId: number;
    writerId: number;
    boughtCounter: number;
    wasEverBought: boolean;
    pageCount: number;
    edition: string;
    productDescription: string;
}
export declare class Product extends Model<Product, ProductCreationAttrs> {
    id: number;
    title: string;
    titleLowerCase: string;
    price: number;
    image: string;
    productionYear: number;
    pageCount: number;
    edition: string;
    productDescription: string;
    boughtCounter: number;
    wasEverBought: boolean;
    genreId: number;
    writerId: number;
    ratings: Rating[];
    basketItem: BasketItem[];
    genre: Genre;
    writer: writer;
}
export {};
