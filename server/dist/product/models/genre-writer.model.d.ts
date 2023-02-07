import { Model } from "sequelize-typescript";
export declare class GenreWriter extends Model<GenreWriter> {
    id: number;
    genreId: number;
    writerId: number;
}
