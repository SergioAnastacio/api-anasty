// src/domain/aggregates/UrlAggregate.ts
import type { Url } from "../entities/Url.js";
import type { UrlId } from "../value-objects/UrlId.js";

export class UrlAggregate {
	constructor(
		public readonly id: UrlId,
		public readonly url: Url,
	) {}

	// Métodos de comportamiento
	updateShortUrl(newShortUrl: string): void {
		this.url.updateShortUrl(newShortUrl);
	}
}
