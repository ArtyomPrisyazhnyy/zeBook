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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const genre_model_1 = require("./genre.model");
const writer_model_1 = require("./writer.model");
const productInfro_model_1 = require("./productInfro.model");
const rating_model_1 = require("./rating.model");
const basketProduct_model_1 = require("../basket/basketProduct.model");
let Product = class Product extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Гарри Потер', description: 'Название товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'Цена' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => genre_model_1.Genre),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Product.prototype, "genreId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => writer_model_1.writer),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Product.prototype, "writerId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => productInfro_model_1.ProductInfo),
    __metadata("design:type", Array)
], Product.prototype, "productInfo", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rating_model_1.Rating),
    __metadata("design:type", Array)
], Product.prototype, "ratings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => basketProduct_model_1.BasketProduct),
    __metadata("design:type", Array)
], Product.prototype, "BasketProduct", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => genre_model_1.Genre),
    __metadata("design:type", genre_model_1.Genre)
], Product.prototype, "genre", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => writer_model_1.writer),
    __metadata("design:type", writer_model_1.writer)
], Product.prototype, "writer", void 0);
Product = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'product' })
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map