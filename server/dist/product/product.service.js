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
exports.ProductService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const files_service_1 = require("../files/files.service");
const genre_model_1 = require("./models/genre.model");
const product_model_1 = require("./models/product.model");
const writer_model_1 = require("./models/writer.model");
const rating_model_1 = require("./models/rating.model");
let ProductService = class ProductService {
    constructor(genreRepository, writerRepository, productRepository, fileService, ratingRepositoty, jwtService) {
        this.genreRepository = genreRepository;
        this.writerRepository = writerRepository;
        this.productRepository = productRepository;
        this.fileService = fileService;
        this.ratingRepositoty = ratingRepositoty;
        this.jwtService = jwtService;
    }
    async createGenre(dto) {
        const genre = await this.genreRepository.create(dto);
        return genre;
    }
    async getAllGenres() {
        const genres = await this.genreRepository.findAll({ include: { all: true } });
        return genres;
    }
    async createWriter(dto) {
        const writer = await this.writerRepository.create(dto);
        return writer;
    }
    async getAllWriters() {
        const writers = await this.writerRepository.findAll({ include: { all: true } });
        return writers;
    }
    async createProduct(dto, image) {
        const fileName = await this.fileService.createFile(image);
        let product = await this.productRepository.create(Object.assign(Object.assign({}, dto), { image: fileName }));
        product.titleLowerCase = product.title.toLowerCase();
        await product.save();
        return product;
    }
    async updateProduct(dto, id, image) {
        let product = await this.productRepository.findOne({ where: { id } });
        product;
        product.title = dto.title;
        product.price = dto.price;
        product.writerId = dto.writerId;
        product.genreId = dto.genreId;
        if (image) {
            product.image = await this.fileService.createFile(image);
        }
        product.titleLowerCase = product.title.toLowerCase();
        await product.save();
        return product;
    }
    async getAllProducts(req) {
        let { writerId, genreId, limit, page, titleLowerCase } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let product;
        if (!titleLowerCase) {
            if (!writerId && !genreId) {
                product = await this.productRepository.findAndCountAll({ include: [
                        {
                            model: writer_model_1.writer,
                            required: true
                        },
                        {
                            model: genre_model_1.Genre,
                            required: true
                        }
                    ], limit, offset });
            }
            if (writerId && !genreId) {
                product = await this.productRepository.findAndCountAll({ where: { writerId },
                    include: [
                        {
                            model: writer_model_1.writer,
                            required: true
                        },
                        {
                            model: genre_model_1.Genre,
                            required: true
                        }
                    ],
                    limit, offset });
            }
            if (!writerId && genreId) {
                product = await this.productRepository.findAndCountAll({ where: { genreId },
                    include: [
                        {
                            model: writer_model_1.writer,
                            required: true
                        },
                        {
                            model: genre_model_1.Genre,
                            required: true
                        }
                    ],
                    limit,
                    offset });
            }
            if (writerId && genreId) {
                product = await this.productRepository.findAndCountAll({ where: { genreId, writerId },
                    include: [
                        {
                            model: writer_model_1.writer,
                            required: true
                        },
                        {
                            model: genre_model_1.Genre,
                            required: true
                        }
                    ], limit, offset });
            }
        }
        else {
            product = await this.productRepository.findAndCountAll({ where: { titleLowerCase }, include: { all: true }, limit, offset });
        }
        return product;
    }
    async getOneProduct(id) {
        const product = await this.productRepository.findOne({ where: { id }, include: { all: true } });
        return product;
    }
    async getProductByName(req) {
        let { writerId, genreId } = req.query;
        let product = await this.productRepository.findAll({
            where: { writerId, genreId },
            include: { all: true }
        });
        return product;
    }
    async removeProduct(id) {
        const product = await this.productRepository.destroy({ where: { id } });
        return product;
    }
    async addRating(RatingDto, req) {
        const { productId, rate } = RatingDto;
        const productItem = await this.getOneProduct(productId);
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        if (typeof productId !== 'number'
            ||
                productId === null
            ||
                typeof rate !== 'number'
            ||
                rate === null
            ||
                !productItem) {
            return {
                isSuccess: false
            };
        }
        const Raiting = new rating_model_1.Rating();
        Raiting.productId = productId;
        Raiting.rate = rate;
        Raiting.userId = user.id;
        await Raiting.save();
        return Raiting;
    }
    async getRatingForProduct(id) {
        const rating = await this.ratingRepositoty.findAll({
            where: { productId: id }
        });
        return rating;
    }
    async removeRatingForProduct(productId, req) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        const product = await this.ratingRepositoty.destroy({
            where: { productId, userId: user.id }
        });
        return product;
    }
    async updateRatingForProduct(productId, dto, req) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = this.jwtService.verify(token);
        console.log("==========" + dto.rate);
        const product = await this.ratingRepositoty.findOne({
            where: { productId, userId: user.id }
        });
        product.rate = dto.rate;
        await product.save();
        return product;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(genre_model_1.Genre)),
    __param(1, (0, sequelize_1.InjectModel)(writer_model_1.writer)),
    __param(2, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __param(4, (0, sequelize_1.InjectModel)(rating_model_1.Rating)),
    __metadata("design:paramtypes", [Object, Object, Object, files_service_1.FilesService, Object, jwt_1.JwtService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map