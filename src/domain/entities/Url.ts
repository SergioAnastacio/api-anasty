// src/domain/entities/Url.ts
export class Url {
	constructor(
		public readonly id: string,
		public readonly originalUrl: string,
		public shortUrl: string,
		public readonly createdAt: Date,
	) {}

	// Métodos de comportamiento
	updateShortUrl(newShortUrl: string): void {
		this.shortUrl = newShortUrl;
	}
}
