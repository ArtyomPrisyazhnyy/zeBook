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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const addRating_dto_1 = require("./dto/addRating.dto");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const create_product_dto_1 = require("./dto/create-product.dto");
const create_writer_dto_1 = require("./dto/create-writer.dto");
const genre_model_1 = require("./models/genre.model");
const product_model_1 = require("./models/product.model");
const writer_model_1 = require("./models/writer.model");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    createGenre(dto) {
        return this.productService.createGenre(dto);
    }
    getAllGenres() {
        return this.productService.getAllGenres();
    }
    createWriter(dto) {
        return this.productService.createWriter(dto);
    }
    getAllWriters() {
        return this.productService.getAllWriters();
    }
    createProduct(dto, image) {
        return this.productService.createProduct(dto, image);
    }
    updateProduct(id, dto, image, req) {
        return this.productService.updateProduct(dto, id, image);
    }
    getAllProducts(req) {
        return this.productService.getAllProducts(req);
    }
    getOneProducts(id) {
        return this.productService.getOneProduct(id);
    }
    removeProduct(id) {
        return this.productService.removeProduct(id);
    }
    addRating(ratingt, req) {
        return this.productService.addRating(ratingt, req);
    }
    getRatingForProduct(id) {
        return this.productService.getRatingForProduct(id);
    }
    removeRatingForProduct(productId, req) {
        return this.productService.removeRatingForProduct(productId, req);
    }
    updateRatingForProduct(productId, req, dto) {
        return this.productService.updateRatingForProduct(productId, dto, req);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание Жанра' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: genre_model_1.Genre }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/genre'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createGenre", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все жанры' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [genre_model_1.Genre] }),
    (0, common_1.Get)('/genre'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllGenres", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание автора' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: writer_model_1.writer }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/writer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_writer_dto_1.CreateWriterDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createWriter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить всех авторов' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [writer_model_1.writer] }),
    (0, common_1.Get)('/writer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllWriters", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProguctDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменение параметров товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)('/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_product_dto_1.CreateProguctDto, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все товары' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить один товар' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getOneProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить товар' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "removeProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Отправить рейтинг' }),
    (0, common_1.Post)('/rating'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addRating_dto_1.AddRatingDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addRating", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все рейтинги для товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Get)('/rating/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "getRatingForProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить рейтинг для товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Delete)('/rating/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "removeRatingForProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить рейтинг для товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Put)('/rating/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, addRating_dto_1.AddRatingDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "updateRatingForProduct", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('Товары'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map