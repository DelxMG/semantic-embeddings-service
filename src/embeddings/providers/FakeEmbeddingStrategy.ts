import { EmbeddingStrategy } from "../EmbeddingStrategy";

export class FakeEmbeddingStrategy implements EmbeddingStrategy {
  public readonly name = "fake";
  public readonly dimension = 4;

  public async embedText(text: string): Promise<number[]> {
    const cleanText = text.trim();

    return [
      cleanText.length,
      cleanText.split(" ").length,
      cleanText.includes("?") ? 1 : 0,
      cleanText.length > 20 ? 1 : 0
    ];
  }

  public async embedBatch(texts: string[]): Promise<number[][]> {
    return Promise.all(texts.map((text) => this.embedText(text)));
  }
}