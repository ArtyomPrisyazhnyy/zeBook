import { Model } from "sequelize-typescript";
import { Basket } from "src/basket/basket.model";
import { Rating } from "src/product/rating.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    role: string;
    basket: Basket;
    ratings: Rating[];
}
export {};
