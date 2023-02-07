import { Model } from "sequelize-typescript";
import { Genre } from "src/product/models/genre.model";
import { Product } from "src/product/models/product.model";
import { User } from "src/users/models/users.model";
interface BasketItemCreationAttrs {
    productId: number;
    userId: number;
}
export declare class BasketItem extends Model<BasketItem, BasketItemCreationAttrs> {
    id: number;
    userId: number;
    productId: number;
    writerId: number;
    genreId: number;
    product: Product;
    user: User;
    writer: Product;
    genre: Genre;
}
export {};
