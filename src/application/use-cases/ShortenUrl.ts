// src/application/use-cases/ShortenUrl.ts
import type { UrlRepository } from "../../domain/repositories/UrlRepository.js";
import { UrlAggregate } from "../../domain/aggregates/UrlAggregate.js";
import { Url } from "../../domain/entities/Url.js";
import { UrlId } from "../../domain/value-objects/UrlId.js";
import { v4 as uuidv4 } from "uuid";

export class ShortenUrl {
	constructor(private urlRepository: UrlRepository) {}

	async execute(originalUrl: string): Promise<UrlAggregate> {
		const shortUrl = this.generateShortUrl();
		const url = new Url(uuidv4(), originalUrl, shortUrl, new Date());
		const urlAggregate = new UrlAggregate(new UrlId(uuidv4()), url);
		await this.urlRepository.save(urlAggregate);

		return urlAggregate;
	}

	private generateShortUrl(): string {
		return Math.random().toString(36).substring(2, 8);
	}
}
