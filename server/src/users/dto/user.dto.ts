import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail} from 'class-validator';

export class UserDto {

    @ApiProperty({example: 'use@gmail.com', description: 'Почтовый адрес'})
    @IsString({message: 'должно быть строкой'})
    @IsEmail( {}, {message: 'Некорретный email'})
    readonly email: string;
    
    @ApiProperty({example: '12345678', description: 'Пароль'})
    @IsString({message: 'должно быть строкой'})
    @Length(4, 16, {message: 'не меньше 4 и не больше 16'})
    readonly password: string;
}