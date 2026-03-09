export interface EmbeddingStrategy {
  readonly name: string;
  readonly dimension: number;

  embedText(text: string): Promise<number[]>;
  embedBatch(texts: string[]): Promise<number[][]>;
}