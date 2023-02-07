"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const basket_model_1 = require("./basket/models/basket.model");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const product_module_1 = require("./product/product.module");
const users_model_1 = require("./users/models/users.model");
const genre_model_1 = require("./product/models/genre.model");
const genre_writer_model_1 = require("./product/models/genre-writer.model");
const writer_model_1 = require("./product/models/writer.model");
const rating_model_1 = require("./product/models/rating.model");
const product_model_1 = require("./product/models/product.model");
const files_module_1 = require("./files/files.module");
const serve_static_1 = require("@nestjs/serve-static");
const roles_module_1 = require("./roles/roles.module");
const path = require("path");
const roles_model_1 = require("./roles/roles.model");
const user_roles_model_1 = require("./roles/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const basket_module_1 = require("./basket/basket.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env`
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, 'static'),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    users_model_1.User,
                    product_model_1.Product,
                    genre_model_1.Genre,
                    genre_writer_model_1.GenreWriter,
                    writer_model_1.writer,
                    rating_model_1.Rating,
                    roles_model_1.Role,
                    user_roles_model_1.UserRoles,
                    basket_model_1.BasketItem
                ],
                autoLoadModels: true,
                synchronize: true
            }),
            users_module_1.UsersModule,
            product_module_1.ProductModule,
            files_module_1.FilesModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            basket_module_1.BasketModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map