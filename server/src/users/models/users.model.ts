import { Column, Table, DataType, Model, HasOne, HasMany, BelongsToMany, BelongsTo } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Rating } from "src/product/models/rating.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { BasketItem } from "src/basket/models/basket.model";

interface UserCreationAttrs {
    email: string;
    password: string;

}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true})
    email: string;

    @ApiProperty({example: '123455678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;


    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Rating)
    ratings: Rating[];

    @HasMany(() => BasketItem)
    basketItem: BasketItem[];


}