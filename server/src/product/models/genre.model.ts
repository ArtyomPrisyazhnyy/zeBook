import { Column, Table, DataType, Model, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./product.model";
import { writer } from "./writer.model";
import { GenreWriter } from "./genre-writer.model";
import { BasketItem } from "src/basket/models/basket.model";

interface GenreCreationAttrs {
    name: string;

}

@Table({tableName: 'genre'})
export class Genre extends Model<Genre, GenreCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Фэнтези', description: 'Жанр'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @HasMany(() => Product)
    produtcs: Product[];

    @BelongsToMany(() => writer, () => GenreWriter)
    roles: writer[];

    @HasMany(() => BasketItem)
    basketItem: BasketItem[];

}