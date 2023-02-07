import { ApiProperty } from "@nestjs/swagger";

export class AuthLoginDto {

    @ApiProperty({example: 'user@gmail.com', description: 'Почтовый адрес'})
    readonly email: string;
    @ApiProperty({example: '1234567890', description: 'Пароль'})
    readonly password: string;
}