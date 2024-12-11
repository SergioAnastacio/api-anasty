// src/infrastructure/adapters/express/server.ts
import express from "express";
import { shortenUrlHandler } from "./controllers/UrlController"; // Corrige la extensión del archivo si es necesario
import { redirectUrlHandler } from "./controllers/RedirectUrlController"; // Corrige la extensión del archivo si es necesario
import { setupSwagger } from "./swaggerConfig.js";

export const app = express();
app.use(express.json());

setupSwagger(app);

app.post("/shorten", shortenUrlHandler);
app.get("/:shortUrl", redirectUrlHandler);

const port = 3000;
app.listen(port, () => {});
