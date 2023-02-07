import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { Genre } from "./genre.model";
import { BasketItem } from "src/basket/models/basket.model";
interface writerCreationAttrs {
    name: string;
}
export declare class writer extends Model<writer, writerCreationAttrs> {
    id: number;
    name: string;
    produtcs: Product[];
    roles: Genre[];
    basketItem: BasketItem[];
}
export {};
