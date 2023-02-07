import { ApiProperty } from "@nestjs/swagger";

export class AddRatingDto {
    @ApiProperty({example: '12', description: 'Id товара'})
    productId: number;
    @ApiProperty({example: '5', description: 'Оценка товара'})
    rate: number;
}