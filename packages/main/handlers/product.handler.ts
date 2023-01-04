import { ipcMain } from "electron";
import { AppDataSource } from "../database/data-source";
import { Product } from "../entities/product.entity";

const productRepo = AppDataSource.getRepository(Product);

ipcMain.handle("create-product", async (_ev, product) => {
  const newProduct = new Product();
  newProduct.name = product.name;
  newProduct.price = product.price;

  const response = await productRepo.save(newProduct);

  return response;
});

ipcMain.handle("get-products", async (_ev) => {
  const response = await productRepo.find();

  return response;
});