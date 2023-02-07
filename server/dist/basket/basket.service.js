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
exports.BasketService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_service_1 = require("../product/product.service");
const users_service_1 = require("../users/users.service");
const basket_model_1 = require("./models/basket.model");
let BasketService = class BasketService {
    constructor(productService, userService, jwtService, basketRepository) {
        this.productService = productService;
        this.userService = userService;
        this.jwtService = jwtService;
        this.basketRepository = basketRepository;
    }
    async addToBasket(productDto, req) {
        const { productId, writerId, genreId } = productDto;
        const productItem = await this.productService.getOneProduct(productId);
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        if (productId === null
            ||
                !productItem) {
            return {
                isSuccess: false,
            };
        }
        const basket = new basket_model_1.BasketItem();
        basket.productId = productId;
        basket.writerId = writerId;
        basket.genreId = genreId;
        basket.userId = user.id;
        await basket.save();
        return {
            isSuccess: true,
            basket
        };
    }
    async getBasketForUser(req) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        const basket = await this.basketRepository.findAll({
            where: { userId: user.id },
            include: { all: true }
        });
        return basket;
    }
    async remove(req, productId) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        if (!user) {
            throw new Error('User not found');
        }
        const basket = await this.basketRepository.destroy({
            where: {
                userId: user.id,
                productId
            }
        });
        return basket;
    }
    async cleanBasket(req, productId) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        if (!user) {
            throw new Error('User not found');
        }
        const basket = await this.basketRepository.destroy({
            where: {
                userId: user.id
            }
        });
        return basket;
    }
};
BasketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => product_service_1.ProductService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(3, (0, sequelize_1.InjectModel)(basket_model_1.BasketItem)),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        users_service_1.UsersService,
        jwt_1.JwtService, Object])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map