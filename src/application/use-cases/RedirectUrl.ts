// src/application/use-cases/RedirectUrl.ts
import type { UrlRepository } from "../../domain/repositories/UrlRepository.js";

export class RedirectUrl {
	constructor(private urlRepository: UrlRepository) {}

	async execute(shortUrl: string): Promise<string | null> {
		const urlAggregate = await this.urlRepository.findByShortUrl(shortUrl);

		return urlAggregate ? urlAggregate.url.originalUrl : null;
	}
}
