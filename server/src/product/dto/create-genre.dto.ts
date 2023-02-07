import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {

    @ApiProperty({example: 'Фэнтези', description: 'Название жанра'})
    readonly name: string;
    
}