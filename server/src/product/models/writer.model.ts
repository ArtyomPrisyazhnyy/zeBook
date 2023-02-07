import { Column, Table, DataType, Model, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./product.model";
import { Genre } from "./genre.model";
import { GenreWriter } from "./genre-writer.model";
import { BasketItem } from "src/basket/models/basket.model";

interface writerCreationAttrs {
    name: string;
}

@Table({tableName: 'writer'})
export class writer extends Model<writer, writerCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Джоан Роулинг', description: 'Автор'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @HasMany(() => Product)
    produtcs: Product[];

    @BelongsToMany(() => Genre, () => GenreWriter)
    roles: Genre[];

    @HasMany(() => BasketItem)
    basketItem: BasketItem[];
}