import { Model } from "sequelize-typescript";
import { Rating } from "src/product/models/rating.model";
import { Role } from "src/roles/roles.model";
import { BasketItem } from "src/basket/models/basket.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    roles: Role[];
    ratings: Rating[];
    basketItem: BasketItem[];
}
export {};
