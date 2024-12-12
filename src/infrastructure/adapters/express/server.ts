// src/infrastructure/adapters/express/server.ts
import express from 'express';
import cors, { type CorsOptions } from 'cors';
import morgan from 'morgan';
import { shortenUrlHandler } from './controllers/UrlController.js';
import { redirectUrlHandler } from './controllers/RedirectUrlController.js';
import { setupSwagger } from './swaggerConfig.js';

export const app = express();
// Configuración de CORS para permitir solicitudes desde http://localhost:5173
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
     callback(null, true);
    /**
     * if (origin=== 'http://localhost:5173') {
      callback(null, true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
     */
    console.log(origin)
  },
  methods: ['GET', 'POST'],
};
// Habilitar CORS
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

setupSwagger(app);

app.post('/shorten', shortenUrlHandler);
app.get('/:shortUrl', redirectUrlHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});