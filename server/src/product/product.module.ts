import { JwtService } from '@nestjs/jwt';
import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { Genre } from './models/genre.model';
import { Product } from './models/product.model';
import { writer } from './models/writer.model';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { BasketModule } from 'src/basket/basket.module';
import { Rating } from './models/rating.model';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    SequelizeModule.forFeature([Genre, writer, Product, Rating]),
    RolesModule,
    FilesModule,
    forwardRef(() => AuthModule),
    forwardRef(() =>  BasketModule)
  ],
  exports: [ProductService]
})
export class ProductModule {}
