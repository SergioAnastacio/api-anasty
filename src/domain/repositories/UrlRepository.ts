// src/domain/repositories/UrlRepository.ts
import type { UrlAggregate } from "../aggregates/UrlAggregate.js";

export interface UrlRepository {
	save(url: UrlAggregate): Promise<void>;
	findByShortUrl(shortUrl: string): Promise<UrlAggregate | null>;
}
