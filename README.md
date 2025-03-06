# node-api-cluster-log

ecommerce-api/
│── src/
│ ├── application/ # 📌 Regras de negócio (Use Cases)
│ │ ├── usecases/
│ │ │ ├── get-products-usecase.ts
│ │ │ ├── create-product-usecase.ts
│ ├── domain/ # 📌 Definição de entidades e interfaces (Ports)
│ │ ├── entities/
│ │ │ ├── product.ts
│ │ ├── repositories/
│ │ │ ├── product-repository.ts
│ ├── infrastructure/ # 📌 Implementação de interfaces (Adapters)
│ │ ├── db/
│ │ │ ├── product-repository-impl.ts
│ │ │ ├── database.ts
│ │ ├── logger/
│ │ │ ├── logger.ts
│ ├── presentation/ # 📌 Camada de interface (Controllers & Routes)
│ │ ├── controllers/
│ │ │ ├── product-controller.ts
│ │ ├── routes.ts
│ ├── config/ # 📌 Configuração global
│ │ ├── env.ts
│ ├── server.ts # 📌 Servidor Express
│ ├── clustered-server.ts # 📌 Clusterização
│── .env
│── package.json
│── tsconfig.json
