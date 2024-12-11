// src/domain/value-objects/UrlId.ts
export class UrlId {
	constructor(private readonly id: string) {}

	get value(): string {
		return this.id;
	}

	equals(other: UrlId): boolean {
		return this.id === other.value;
	}
}
