import express from "express";
import {ProductController} from "./controllers/product-controller";

const router = express.Router();

router.get("/products", ProductController.getAllProducts);

export {router};
