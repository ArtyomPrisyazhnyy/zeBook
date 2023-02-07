import { ApiProperty } from "@nestjs/swagger";

export class AddProductDto {

    
    @ApiProperty({example: '12', description: 'Id товара'})
    productId: number;
    @ApiProperty({example: '2', description: 'Id автора'})
    writerId: number;
    @ApiProperty({example: '3', description: 'Id жанра'})
    genreId: number;
}