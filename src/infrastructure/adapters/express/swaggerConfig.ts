// src/infrastructure/adapters/express/swaggerConfig.ts
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "API Anasty",
			version: "1.0.0",
			description: "Documentación de la API Anasty",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./src/infrastructure/adapters/express/controllers/*.ts"], // Archivos que contienen anotaciones Swagger
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
