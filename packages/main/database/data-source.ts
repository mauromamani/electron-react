import { DataSource } from "typeorm";
import { Product } from "../entities/product.entity"

export const AppDataSource = new DataSource({
  type: "mysql",
  database: "dev_gestion_productos",
  host: "192.168.1.74",
  port: 3306,
  username: "root",
  password: "mysql",
  synchronize: true, // CUIDADO!
  entities: [Product],
});