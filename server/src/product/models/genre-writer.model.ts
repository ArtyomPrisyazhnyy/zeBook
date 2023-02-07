import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Genre } from "./genre.model";
import { writer } from "./writer.model";



@Table({tableName: 'genre_writer', createdAt: false, updatedAt: false})
export class GenreWriter extends Model<GenreWriter>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER})
    genreId: number;

    @ForeignKey(() => writer)
    @Column({type: DataType.INTEGER})
    writerId: number;
}