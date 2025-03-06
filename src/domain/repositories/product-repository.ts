import { Product } from "../entities/product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  create(product: Product): Promise<Product>;
}
