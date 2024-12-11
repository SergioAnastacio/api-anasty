// src/infrastructure/adapters/express/controllers/UrlController.ts
import type { Request, Response } from "express";
import { ShortenUrl } from "../../../../application/use-cases/ShortenUrl.js";
import { urlRepository } from "../../../repositories/index.js";

const shortenUrl = new ShortenUrl(urlRepository);

/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Acortar una URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 example: http://example.com
 *     responses:
 *       200:
 *         description: URL acortada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 url:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     originalUrl:
 *                       type: string
 *                     shortUrl:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 */
export const shortenUrlHandler = async (req: Request, res: Response) => {
	const { originalUrl } = req.body;
	const urlAggregate = await shortenUrl.execute(originalUrl);
	res.json(urlAggregate);
};
