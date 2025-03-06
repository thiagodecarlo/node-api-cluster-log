import {Request, Response} from "express";
import {GetProductsUseCase} from "../../application/usecases/get-products-use-case";
import {ProductRepositoryImpl} from "../../infrastructure/db/product-repository-impl";

export class ProductController {
  static async getAllProducts(req: Request, res: Response) {
    const repository = new ProductRepositoryImpl();
    const useCase = new GetProductsUseCase(repository);

    try {
      const products = await useCase.execute();
      res.json(products);
    } catch (error) {
      res.status(500).json({message: "Erro ao buscar produtos"});
    }
  }
}
