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
exports.BasketItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const genre_model_1 = require("../../product/models/genre.model");
const product_model_1 = require("../../product/models/product.model");
const writer_model_1 = require("../../product/models/writer.model");
const users_model_1 = require("../../users/models/users.model");
let BasketItem = class BasketItem extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], BasketItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Id пользователя' }),
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BasketItem.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'Id товара' }),
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BasketItem.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'Id автора' }),
    (0, sequelize_typescript_1.ForeignKey)(() => writer_model_1.writer),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BasketItem.prototype, "writerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4', description: 'Id жанра' }),
    (0, sequelize_typescript_1.ForeignKey)(() => genre_model_1.Genre),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], BasketItem.prototype, "genreId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], BasketItem.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], BasketItem.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => writer_model_1.writer),
    __metadata("design:type", product_model_1.Product)
], BasketItem.prototype, "writer", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => genre_model_1.Genre),
    __metadata("design:type", genre_model_1.Genre)
], BasketItem.prototype, "genre", void 0);
BasketItem = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'BasketItem' })
], BasketItem);
exports.BasketItem = BasketItem;
//# sourceMappingURL=basket.model.js.map