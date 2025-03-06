import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/product-repository";
import { pool } from "./database";

export class ProductRepositoryImpl implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
  }

  async create(product: Product): Promise<Product> {
    const result = await pool.query(
      "INSERT INTO products (id, name, price, description, category, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        product.id,
        product.name,
        product.price,
        product.description,
        product.category,
        product.stock,
      ]
    );
    return result.rows[0];
  }
}
