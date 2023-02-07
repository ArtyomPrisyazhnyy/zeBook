import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { writer } from "./writer.model";
import { BasketItem } from "src/basket/models/basket.model";
interface GenreCreationAttrs {
    name: string;
}
export declare class Genre extends Model<Genre, GenreCreationAttrs> {
    id: number;
    name: string;
    produtcs: Product[];
    roles: writer[];
    basketItem: BasketItem[];
}
export {};
