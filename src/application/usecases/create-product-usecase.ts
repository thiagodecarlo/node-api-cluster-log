import { Product } from "../../domain/entities/product";
import { LogEventName } from "../../domain/logger/logger-event-name"; // Importando o Enum
import { LoggerPayload } from "../../domain/logger/logger-payload";
import { Logger } from "../../domain/logger/logger-port"; // Importando a interface Logger
import { ProductRepository } from "../../domain/repositories/product-repository";

export class CreateProductUseCase {
  private productRepository: ProductRepository;
  private logger: Logger;

  constructor(productRepository: ProductRepository, logger: Logger) {
    this.productRepository = productRepository;
    this.logger = logger;
  }

  async execute(product: Product) {
    const className = "CreateProductUseCase";
    const method = "execute";

    try {
      // Preparando o payload de log
      const logPayload: LoggerPayload = {
        message: `Creating product: ${product.name}`,
        name: LogEventName.API_EVENT,
        className,
        method,
        extraAttributes: { productId: product.id },
        timestamp: new Date().toISOString(),
      };

      // Log de informação
      this.logger.info(logPayload);

      const createdProduct = await this.productRepository.create(product);

      // Preparando o payload de log de sucesso
      const successPayload: LoggerPayload = {
        message: `Product created successfully: ${createdProduct.name}`,
        name: LogEventName.API_EVENT,
        className,
        method,
        extraAttributes: { productId: createdProduct.id },
        timestamp: new Date().toISOString(),
      };

      // Log de sucesso
      this.logger.info(successPayload);
      return createdProduct;
    } catch (error: any) {
      // Preparando o payload de log de erro
      const errorPayload: LoggerPayload = {
        message: `Error creating product: ${error.message}`,
        name: LogEventName.API_ERROR,
        className,
        method,
        extraAttributes: { productId: product.id, errorStack: error.stack },
        timestamp: new Date().toISOString(),
      };

      // Log de erro
      this.logger.error(errorPayload);
      throw new Error("Error creating product");
    }
  }
}
