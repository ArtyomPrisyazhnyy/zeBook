import { Column, Table, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "./product.model";
import { User } from "src/users/models/users.model";

interface RatingCreationAttrs {
    email: string;
    password: string;

}

@Table({tableName: 'Rating'})
export class Rating extends Model<Rating, RatingCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "5", description: 'Оценка'})
    @Column({type: DataType.INTEGER, allowNull: false})
    rate: number;    

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER})
    productId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;


    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Product)
    product: Product;

}