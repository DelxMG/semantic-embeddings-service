import { env } from "../config/env";
import { EmbeddingStrategy } from "./EmbeddingStrategy";
import { FakeEmbeddingStrategy } from "./providers/FakeEmbeddingStrategy";
import { LocalTransformerEmbeddingStrategy } from "./providers/LocalTransformerEmbeddingStrategy";
import { OpenAIEmbeddingStrategy } from "./providers/OpenAIEmbeddingStrategy";

export class EmbeddingStrategyFactory {
  public static create(): EmbeddingStrategy {
    switch (env.embeddingProvider) {
      case "fake":
        return new FakeEmbeddingStrategy();

      case "local":
        return new LocalTransformerEmbeddingStrategy();

      case "openai":
        return new OpenAIEmbeddingStrategy();

      default:
        throw new Error(
          `Unsupported embedding provider: ${env.embeddingProvider}`
        );
    }
  }
}