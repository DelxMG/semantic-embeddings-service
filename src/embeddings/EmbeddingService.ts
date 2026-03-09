import { EmbeddingStrategy } from "./EmbeddingStrategy";

export class EmbeddingService {
  constructor(private readonly strategy: EmbeddingStrategy) {}

  public getStrategyName(): string {
    return this.strategy.name;
  }

  public getDimension(): number {
    return this.strategy.dimension;
  }

  public async generateEmbedding(text: string): Promise<number[]> {
    return this.strategy.embedText(text);
  }

  public async generateEmbeddings(texts: string[]): Promise<number[][]> {
    return this.strategy.embedBatch(texts);
  }
}