"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const basket_service_1 = require("./basket.service");
const addProduct_dto_1 = require("./dto/addProduct.dto");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    addProductToBasket(product, req) {
        return this.basketService.addToBasket(product, req);
    }
    getBasketUser(req) {
        return this.basketService.getBasketForUser(req);
    }
    removeProductFromBasket(req, productId) {
        return this.basketService.remove(req, Number(productId));
    }
    cleanBasket(req, productId) {
        return this.basketService.cleanBasket(req, Number(productId));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавление в корзину' }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addProduct_dto_1.AddProductDto, Object]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "addProductToBasket", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить товары в корзине' }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "getBasketUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить один товар в корзине' }),
    (0, common_1.Delete)('/:productId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "removeProductFromBasket", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Очистить корзину' }),
    (0, common_1.Delete)('/clean/:productId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "cleanBasket", null);
BasketController = __decorate([
    (0, swagger_1.ApiTags)("Корзина"),
    (0, common_1.Controller)('basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
exports.BasketController = BasketController;
//# sourceMappingURL=basket.controller.js.map