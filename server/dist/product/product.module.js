"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const files_module_1 = require("../files/files.module");
const genre_model_1 = require("./models/genre.model");
const product_model_1 = require("./models/product.model");
const writer_model_1 = require("./models/writer.model");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const roles_module_1 = require("../roles/roles.module");
const auth_module_1 = require("../auth/auth.module");
const basket_module_1 = require("../basket/basket.module");
const rating_model_1 = require("./models/rating.model");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([genre_model_1.Genre, writer_model_1.writer, product_model_1.Product, rating_model_1.Rating]),
            roles_module_1.RolesModule,
            files_module_1.FilesModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            (0, common_1.forwardRef)(() => basket_module_1.BasketModule)
        ],
        exports: [product_service_1.ProductService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map