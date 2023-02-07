import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { writer } from "./writer.model";
interface GenreCreationAttrs {
    email: string;
    password: string;
}
export declare class Genre extends Model<Genre, GenreCreationAttrs> {
    id: number;
    name: string;
    produtcs: Product[];
    roles: writer[];
}
export {};
