import { pipeline } from "@xenova/transformers";
import { EmbeddingStrategy } from "../EmbeddingStrategy";

export class LocalTransformerEmbeddingStrategy implements EmbeddingStrategy {
  public readonly name = "local-transformer";
  public readonly dimension = 384;

  private extractor: any;

  constructor() {}

  private async getExtractor() {
    if (!this.extractor) {
      this.extractor = await pipeline(
        "feature-extraction",
        "Xenova/all-MiniLM-L6-v2"
      );
    }
    return this.extractor;
  }

  public async embedText(text: string): Promise<number[]> {
    const extractor = await this.getExtractor();

    const result = await extractor(text, {
      pooling: "mean",
      normalize: true
    });

    return Array.from(result.data);
  }

  public async embedBatch(texts: string[]): Promise<number[][]> {
    return Promise.all(texts.map((t) => this.embedText(t)));
  }
}