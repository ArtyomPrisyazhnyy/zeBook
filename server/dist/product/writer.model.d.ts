import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { Genre } from "./genre.model";
interface writerCreationAttrs {
    email: string;
    password: string;
}
export declare class writer extends Model<writer, writerCreationAttrs> {
    id: number;
    name: string;
    produtcs: Product[];
    roles: Genre[];
}
export {};
