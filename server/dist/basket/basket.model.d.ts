import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { BasketProduct } from "./basketProduct.model";
interface BasketCreationAttrs {
    email: string;
    password: string;
}
export declare class Basket extends Model<Basket, BasketCreationAttrs> {
    id: number;
    userId: number;
    author: User;
    BasketProduct: BasketProduct[];
}
export {};
