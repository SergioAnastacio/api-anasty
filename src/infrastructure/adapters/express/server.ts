// src/infrastructure/adapters/express/server.ts
import express from 'express';
import { shortenUrlHandler } from './controllers/UrlController.js';
import { redirectUrlHandler } from './controllers/RedirectUrlController.js';
import { setupSwagger } from './swaggerConfig.js';

export const app = express();
app.use(express.json());

setupSwagger(app);

app.post('/shorten', shortenUrlHandler);
app.get('/:shortUrl', redirectUrlHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});