import { UsersService } from './users.service';
import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/users.model';
//import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
//import { Roles } from 'src/auth/roles-auth.decorator';
//import { RolesGuard } from 'src/auth/roles.guard';
//import { AddRoleDto } from './dto/add-tole.dto';
//import { ValidationPipe } from 'src/pipes/validation.pipe';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    
    constructor(private  UsersService: UsersService){}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: UserDto){
        return this.UsersService.createUser(userDto);
    }


    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.UsersService.getAllUsers();
    }
/*
    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto){
        return this.UsersService.addRole(dto);
    }*/
}
