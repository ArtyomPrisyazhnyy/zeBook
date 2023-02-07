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
exports.AddProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AddProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'Id товара' }),
    __metadata("design:type", Number)
], AddProductDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'Id автора' }),
    __metadata("design:type", Number)
], AddProductDto.prototype, "writerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'Id жанра' }),
    __metadata("design:type", Number)
], AddProductDto.prototype, "genreId", void 0);
exports.AddProductDto = AddProductDto;
//# sourceMappingURL=addProduct.dto.js.map