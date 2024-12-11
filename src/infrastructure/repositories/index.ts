// src/infrastructure/repositories/index.ts
import { InMemoryUrlRepository } from "./InMemoryUrlRepository.js";

export const urlRepository = new InMemoryUrlRepository();
