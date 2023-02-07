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
exports.writer = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const product_model_1 = require("./product.model");
const genre_model_1 = require("./genre.model");
const genre_writer_model_1 = require("./genre-writer.model");
const basket_model_1 = require("../../basket/models/basket.model");
let writer = class writer extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], writer.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Джоан Роулинг', description: 'Автор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], writer.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.Product),
    __metadata("design:type", Array)
], writer.prototype, "produtcs", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => genre_model_1.Genre, () => genre_writer_model_1.GenreWriter),
    __metadata("design:type", Array)
], writer.prototype, "roles", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => basket_model_1.BasketItem),
    __metadata("design:type", Array)
], writer.prototype, "basketItem", void 0);
writer = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'writer' })
], writer);
exports.writer = writer;
//# sourceMappingURL=writer.model.js.map