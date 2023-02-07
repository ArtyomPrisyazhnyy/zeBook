import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BasketService } from './basket.service';
import { AddProductDto } from './dto/addProduct.dto';

@ApiTags("Корзина")
@Controller('basket')
export class BasketController {

    constructor(private basketService: BasketService){}


    @ApiOperation({summary: 'Добавление в корзину'})
    @Post()
    @UseGuards(JwtAuthGuard)
    addProductToBasket(
        @Body() product: AddProductDto,
        @Req() req: any) {             
        return this.basketService.addToBasket(product, req);
    }  

    @ApiOperation({summary: 'Получить товары в корзине'})
    @Get()
    @UseGuards(JwtAuthGuard)
    getBasketUser(@Req() req: any){
        return this.basketService.getBasketForUser(req)
    }

    @ApiOperation({summary: 'Удалить один товар в корзине'})
    @Delete('/:productId')
    @UseGuards(JwtAuthGuard)
    removeProductFromBasket(
        @Req() req: any,
        @Param('productId') productId
    ){
        return this.basketService.remove(req, Number(productId))
    }

    @ApiOperation({summary: 'Очистить корзину'})
    @Delete('/clean/:productId')
    @UseGuards(JwtAuthGuard)
    cleanBasket( 
        @Req() req: any,
        @Param('productId') productId
    ) {
        return this.basketService.cleanBasket(req, Number(productId))
    }

}
