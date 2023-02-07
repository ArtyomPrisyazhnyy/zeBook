import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail} from 'class-validator';

export class CreateWriterDto {

    @ApiProperty({example: 'Шекспир', description: 'Имя автора'})
    readonly name: string;
    
}