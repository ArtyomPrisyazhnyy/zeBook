import { Column, Table, DataType, Model, ForeignKey, HasMany, BelongsTo } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Genre } from "./genre.model";
import { writer } from "./writer.model";
import { Rating } from "./rating.model";
import { BasketItem } from "src/basket/models/basket.model";

interface ProductCreationAttrs {
    title: string;
    price: number;
    image: string;
    productionYear: number;
    genreId: number;
    writerId: number;
    boughtCounter: number;
    wasEverBought: boolean;
    pageCount: number;
    edition: string;
    productDescription: string;
}

@Table({tableName: 'product'})
export class Product extends Model<Product, ProductCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Гарри Потер', description: 'Название товара'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'гарри потер', description: 'Название товара в нижнем регистре'})
    @Column({type: DataType.STRING, unique: true})
    titleLowerCase: string;

    @ApiProperty({example: '30', description: 'Цена'})
    @Column({type: DataType.FLOAT, allowNull: false})
    price: number; 

    @ApiProperty({example: '', description: 'Изображение'})
    @Column({type: DataType.STRING, allowNull: false})
    image: string;

    @ApiProperty({example: '2002', description: 'Год выхода'})
    @Column({type: DataType.INTEGER, allowNull: false})
    productionYear: number;
    
    @ApiProperty({example: '562', description: 'Кол-во страниц'})
    @Column({type: DataType.INTEGER, allowNull: false})
    pageCount: number;

    @ApiProperty({example: 'Цветочек ООО', description: 'Издательство'})
    @Column({type: DataType.STRING, allowNull: false})
    edition: string;

    @ApiProperty({example: '', description: 'Описание товара'})
    @Column({type: DataType.TEXT, allowNull: false})
    productDescription: string;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    boughtCounter: number;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    wasEverBought: boolean;


    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER})
    genreId: number;

    @ForeignKey(() => writer)
    @Column({type: DataType.INTEGER})
    writerId: number;


    @HasMany(() => Rating)
    ratings: Rating[];

    @HasMany(() => BasketItem)
    basketItem: BasketItem[];


    @BelongsTo(() => Genre)
    genre: Genre;

    @BelongsTo(() => writer)
    writer: writer;
}