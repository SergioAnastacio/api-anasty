// src/infrastructure/adapters/express/controllers/RedirectUrlController.ts
import type { Request, Response } from "express";
import { RedirectUrl } from "../../../../application/use-cases/RedirectUrl.js";
import { urlRepository } from "../../../repositories/index.js";

const redirectUrl = new RedirectUrl(urlRepository);

/**
 * @swagger
 * /{shortUrl}:
 *   get:
 *     summary: Redirigir una URL acortada
 *     parameters:
 *       - in: path
 *         name: shortUrl
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       301:
 *         description: Redirección a la URL original
 *       404:
 *         description: URL no encontrada
 */
export const redirectUrlHandler = async (req: Request, res: Response) => {
	const { shortUrl } = req.params;
	const originalUrl = await redirectUrl.execute(shortUrl);
	if (originalUrl) {
		res.redirect(301, originalUrl);
	} else {
		res.status(404).send("URL not found");
	}
};
