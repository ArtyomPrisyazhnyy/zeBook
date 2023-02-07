import { ApiProperty } from "@nestjs/swagger";

export class CreateProguctDto {
    @ApiProperty({example: 'Гарри Потер', description: 'Название товара'})
    readonly title: string;

    @ApiProperty({example: 'гарри потер', description: 'Название товара в нижнем регистре'})
    readonly titleLowerCase: string;

    @ApiProperty({example: '30', description: 'Цена товара'})
    readonly price: number;

    @ApiProperty({example: '1', description: 'Id автора'})
    readonly writerId: number;

    @ApiProperty({example: '1', description: 'Id жанра'})
    readonly genreId: number;

    @ApiProperty({example: '2002', description: 'Год выхода'})
    readonly productionYear: number;

    @ApiProperty({example: 'Ли Бардуго', description: 'Автор'})
    readonly writer: string; 

    @ApiProperty({example: '562', description: 'Кол-во страниц'})
    readonly pageCount: number;

    @ApiProperty({example: 'Цветочек ООО', description: 'Издательство'})
    readonly edition: string;

    @ApiProperty({example: '', description: 'Описание товара'})
    readonly productDescription: string;
}