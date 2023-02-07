import { Model } from "sequelize-typescript";
import { Product } from "./product.model";
import { User } from "src/users/models/users.model";
interface RatingCreationAttrs {
    email: string;
    password: string;
}
export declare class Rating extends Model<Rating, RatingCreationAttrs> {
    id: number;
    rate: number;
    productId: number;
    userId: number;
    user: User;
    product: Product;
}
export {};
