import { ProductRepository } from "../../domain/repositories/product-repository";

export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute() {
    return await this.productRepository.getAll();
  }
}
