import { BasketItem } from 'src/basket/models/basket.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { User } from './users/models/users.model';
import { Genre } from './product/models/genre.model';
import { GenreWriter } from './product/models/genre-writer.model';
import { writer } from './product/models/writer.model';
import { Rating } from './product/models/rating.model';
import { Product } from './product/models/product.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RolesModule } from './roles/roles.module';
import * as path from 'path'
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Product,
        Genre,
        GenreWriter,
        writer,
        Rating,
        Role,
        UserRoles,
        BasketItem
      ],
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    ProductModule,
    FilesModule,
    RolesModule,
    AuthModule,
    BasketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
