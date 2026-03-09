import OpenAI from "openai";
import { env } from "../../config/env";
import { EmbeddingStrategy } from "../EmbeddingStrategy";

export class OpenAIEmbeddingStrategy implements EmbeddingStrategy {
  public readonly name: string;
  public readonly dimension: number;

  private readonly client: OpenAI;
  private readonly model: string;

  constructor() {
    this.client = new OpenAI({
      apiKey: env.openAiApiKey
    });

    this.model = env.openAiEmbeddingModel;
    this.dimension = env.openAiEmbeddingDimensions;
    this.name = `openai-${this.model}`;
  }

  public async embedText(text: string): Promise<number[]> {
    const response = await this.client.embeddings.create({
      model: this.model,
      input: text,
      encoding_format: "float",
      dimensions: this.dimension
    });

    return response.data[0].embedding;
  }

  public async embedBatch(texts: string[]): Promise<number[][]> {
    const response = await this.client.embeddings.create({
      model: this.model,
      input: texts,
      encoding_format: "float",
      dimensions: this.dimension
    });

    return response.data.map((item) => item.embedding);
  }
}