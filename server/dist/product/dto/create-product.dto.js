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
exports.CreateProguctDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateProguctDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Гарри Потер', description: 'Название товара' }),
    __metadata("design:type", String)
], CreateProguctDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'гарри потер', description: 'Название товара в нижнем регистре' }),
    __metadata("design:type", String)
], CreateProguctDto.prototype, "titleLowerCase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '30', description: 'Цена товара' }),
    __metadata("design:type", Number)
], CreateProguctDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Id автора' }),
    __metadata("design:type", Number)
], CreateProguctDto.prototype, "writerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Id жанра' }),
    __metadata("design:type", Number)
], CreateProguctDto.prototype, "genreId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2002', description: 'Год выхода' }),
    __metadata("design:type", Number)
], CreateProguctDto.prototype, "productionYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ли Бардуго', description: 'Автор' }),
    __metadata("design:type", String)
], CreateProguctDto.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '562', description: 'Кол-во страниц' }),
    __metadata("design:type", Number)
], CreateProguctDto.prototype, "pageCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Цветочек ООО', description: 'Издательство' }),
    __metadata("design:type", String)
], CreateProguctDto.prototype, "edition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'Описание товара' }),
    __metadata("design:type", String)
], CreateProguctDto.prototype, "productDescription", void 0);
exports.CreateProguctDto = CreateProguctDto;
//# sourceMappingURL=create-product.dto.js.map