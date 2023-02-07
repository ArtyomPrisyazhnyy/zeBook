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
const rating_model_1 = require("./rating.model");
const basket_model_1 = require("../../basket/models/basket.model");
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
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'гарри потер', description: 'Название товара в нижнем регистре' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true }),
    __metadata("design:type", String)
], Product.prototype, "titleLowerCase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '30', description: 'Цена' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'Изображение' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2002', description: 'Год выхода' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Product.prototype, "productionYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '562', description: 'Кол-во страниц' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Product.prototype, "pageCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Цветочек ООО', description: 'Издательство' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "edition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'Описание товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Product.prototype, "productDescription", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "boughtCounter", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "wasEverBought", void 0);
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
    (0, sequelize_typescript_1.HasMany)(() => rating_model_1.Rating),
    __metadata("design:type", Array)
], Product.prototype, "ratings", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => basket_model_1.BasketItem),
    __metadata("design:type", Array)
], Product.prototype, "basketItem", void 0);
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