import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRatingDto } from './dto/addRating.dto';
import { CreateGenreDto } from './dto/create-genre.dto';
import { CreateProguctDto } from './dto/create-product.dto';
import { CreateWriterDto } from './dto/create-writer.dto';
import { Genre } from './models/genre.model';
import { Product } from './models/product.model';
import { writer } from './models/writer.model';
import { ProductService } from './product.service';


@ApiTags('Товары')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}


    ///// Жанр

    @ApiOperation({summary: 'Создание Жанра'})
    @ApiResponse({status: 200, type: Genre})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/genre')
    createGenre(@Body() dto: CreateGenreDto){
        return this.productService.createGenre(dto);
    }

    @ApiOperation({summary: 'Получить все жанры'})
    @ApiResponse({status: 200, type: [Genre]})
    @Get('/genre')
    getAllGenres(){
        return this.productService.getAllGenres();
    }


    ////////////// Автор

    @ApiOperation({summary: 'Создание автора'})
    @ApiResponse({status: 200, type: writer})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/writer')
    createWriter(@Body() dto: CreateWriterDto){
        return this.productService.createWriter(dto);
    }

    @ApiOperation({summary: 'Получить всех авторов'})
    @ApiResponse({status: 200, type: [writer]})
    @Get('/writer')
    getAllWriters(){
        return this.productService.getAllWriters();
    }

    ///////////// Товар

    @ApiOperation({summary: 'Создание товара'})
    @ApiResponse({status: 200, type: [Product] })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProduct(@Body() dto: CreateProguctDto,
                  @UploadedFile() image: any){
        return this.productService.createProduct(dto, image)
    }

    @ApiOperation({summary: 'Изменение параметров товара'})
    @ApiResponse({status: 200, type: [Product] })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Put('/:id')
    @UseInterceptors(FileInterceptor('image'))
    updateProduct(
        @Param('id') id: string,
        @Body() dto: CreateProguctDto,
        @UploadedFile() image: any,
        @Req() req: any
    ){
        return this.productService.updateProduct(dto, id, image)
    }

    @ApiOperation({summary: 'Получить все товары'})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAllProducts(@Request() req: any){
        return this.productService.getAllProducts(req);
    }

    @ApiOperation({summary: 'Получить один товар'})
    @ApiResponse({status: 200, type: [Product]})
    @Get(':id')
    getOneProducts(@Param('id') id: number){
        return this.productService.getOneProduct(id);
    }


    @ApiOperation({summary: 'Удалить товар'})
    @ApiResponse({status: 200, type: [Product]})
    @Delete('/:id')
    removeProduct(@Param('id') id: string){
        //console.log(id);
        return this.productService.removeProduct(id);
    }


    ///////////
    ////////// Рейтинг

    @ApiOperation({summary: 'Отправить рейтинг'})
    @Post('/rating')
    @UseGuards(JwtAuthGuard)
    addRating(
        @Body() ratingt: AddRatingDto,
        @Req() req: any) {             
        return this.productService.addRating(ratingt, req);
    }
    
    @ApiOperation({summary: 'Получить все рейтинги для товара'})
    @ApiResponse({status: 200, type: [Product]})
    @Get('/rating/:id')
    getRatingForProduct(@Param('id') id: number){
        return this.productService.getRatingForProduct(id);
    }

    @ApiOperation({summary: 'Удалить рейтинг для товара'})
    @ApiResponse({status: 200, type: [Product]})
    @Delete('/rating/:id')
    removeRatingForProduct(
        @Param('id') productId: number,
        @Req() req: any
    ){
        return this.productService.removeRatingForProduct(productId, req);
    }

    @ApiOperation({summary: 'Обновить рейтинг для товара'})
    @ApiResponse({status: 200, type: [Product]})
    @Put('/rating/:id')
    updateRatingForProduct(
        @Param('id') productId: number,
        @Req() req: any,
        @Body() dto: AddRatingDto,
    ){
        return this.productService.updateRatingForProduct(productId, dto, req);
    }

}



