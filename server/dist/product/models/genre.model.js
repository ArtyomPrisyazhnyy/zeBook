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
exports.Genre = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const product_model_1 = require("./product.model");
const writer_model_1 = require("./writer.model");
const genre_writer_model_1 = require("./genre-writer.model");
const basket_model_1 = require("../../basket/models/basket.model");
let Genre = class Genre extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Genre.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Фэнтези', description: 'Жанр' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Genre.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.Product),
    __metadata("design:type", Array)
], Genre.prototype, "produtcs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => writer_model_1.writer, () => genre_writer_model_1.GenreWriter),
    __metadata("design:type", Array)
], Genre.prototype, "roles", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => basket_model_1.BasketItem),
    __metadata("design:type", Array)
], Genre.prototype, "basketItem", void 0);
Genre = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'genre' })
], Genre);
exports.Genre = Genre;
//# sourceMappingURL=genre.model.js.map