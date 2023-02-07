import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { jwtConstants } from 'src/auth/constants';
import { Product } from 'src/product/models/product.model';
import { ProductModule } from 'src/product/product.module';
import { User } from 'src/users/models/users.model';
import { UsersModule } from 'src/users/users.module';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { BasketItem } from './models/basket.model';

@Module({
  controllers: [BasketController],
  providers: [BasketService],
  imports: [
    SequelizeModule.forFeature([User, Product, BasketItem]),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductModule),
    JwtModule.register({
      secret: jwtConstants.secret || 'SECRET',
      signOptions: { expiresIn: '24h' },
    })
  ],
  exports: [BasketService],
})
export class BasketModule {}
