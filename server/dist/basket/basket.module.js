"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const constants_1 = require("../auth/constants");
const product_model_1 = require("../product/models/product.model");
const product_module_1 = require("../product/product.module");
const users_model_1 = require("../users/models/users.model");
const users_module_1 = require("../users/users.module");
const basket_controller_1 = require("./basket.controller");
const basket_service_1 = require("./basket.service");
const basket_model_1 = require("./models/basket.model");
let BasketModule = class BasketModule {
};
BasketModule = __decorate([
    (0, common_1.Module)({
        controllers: [basket_controller_1.BasketController],
        providers: [basket_service_1.BasketService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, product_model_1.Product, basket_model_1.BasketItem]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => product_module_1.ProductModule),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret || 'SECRET',
                signOptions: { expiresIn: '24h' },
            })
        ],
        exports: [basket_service_1.BasketService],
    })
], BasketModule);
exports.BasketModule = BasketModule;
//# sourceMappingURL=basket.module.js.map