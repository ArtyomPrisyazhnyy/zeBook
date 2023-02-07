"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Книжный магазин")
        .setDescription("Документация REST API")
        .setVersion("1.0.0")
        .addTag("ULBI TV")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map