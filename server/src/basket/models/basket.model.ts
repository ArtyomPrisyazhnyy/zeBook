import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Genre } from "src/product/models/genre.model";
import { Product } from "src/product/models/product.model";
import { writer } from "src/product/models/writer.model";
import { User } from "src/users/models/users.model";

interface BasketItemCreationAttrs{
    productId: number;
    userId: number;
}

@Table({tableName: 'BasketItem'})
export class BasketItem extends Model<BasketItem, BasketItemCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1', description: 'Id пользователя'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ApiProperty({example: '2', description: 'Id товара'})
    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number;

    @ApiProperty({example: '3', description: 'Id автора'})
    @ForeignKey(() => writer)
    @Column({type: DataType.INTEGER})
    writerId: number;

    @ApiProperty({example: '4', description: 'Id жанра'})
    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER})
    genreId: number;

    @BelongsTo(() => Product)
    product: Product;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => writer)
    writer: Product;

    @BelongsTo(() => Genre)
    genre: Genre;
}