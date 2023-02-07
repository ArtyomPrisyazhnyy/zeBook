import { AddRatingDto } from './dto/addRating.dto';
import { CreateGenreDto } from './dto/create-genre.dto';
import { CreateProguctDto } from './dto/create-product.dto';
import { CreateWriterDto } from './dto/create-writer.dto';
import { Genre } from './models/genre.model';
import { Product } from './models/product.model';
import { writer } from './models/writer.model';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createGenre(dto: CreateGenreDto): Promise<Genre>;
    getAllGenres(): Promise<Genre[]>;
    createWriter(dto: CreateWriterDto): Promise<writer>;
    getAllWriters(): Promise<writer[]>;
    createProduct(dto: CreateProguctDto, image: any): Promise<Product>;
    updateProduct(id: string, dto: CreateProguctDto, image: any, req: any): Promise<Product>;
    getAllProducts(req: any): Promise<any>;
    getOneProducts(id: number): Promise<Product>;
    removeProduct(id: string): Promise<number>;
    addRating(ratingt: AddRatingDto, req: any): Promise<import("./models/rating.model").Rating | {
        isSuccess: boolean;
    }>;
    getRatingForProduct(id: number): Promise<import("./models/rating.model").Rating[]>;
    removeRatingForProduct(productId: number, req: any): Promise<number>;
    updateRatingForProduct(productId: number, req: any, dto: AddRatingDto): Promise<import("./models/rating.model").Rating>;
}
