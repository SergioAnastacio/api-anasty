// src/infrastructure/repositories/InMemoryUrlRepository.ts
import type { UrlRepository } from "../../domain/repositories/UrlRepository.js";
import type { UrlAggregate } from "../../domain/aggregates/UrlAggregate.js";

export class InMemoryUrlRepository implements UrlRepository {
	private urls: UrlAggregate[] = [];

	async save(url: UrlAggregate): Promise<void> {
		this.urls.push(url);
	}

	async findByShortUrl(shortUrl: string): Promise<UrlAggregate | null> {
		return this.urls.find((url) => url.url.shortUrl === shortUrl) || null;
	}
}
