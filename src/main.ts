import { EmbeddingService } from "./embeddings/EmbeddingService";
import { LocalTransformerEmbeddingStrategy } from "./embeddings/providers/LocalTransformerEmbeddingStrategy";

async function bootstrap(): Promise<void> {
  const strategy = new LocalTransformerEmbeddingStrategy();
  const embeddingService = new EmbeddingService(strategy);

  const text = "¿Qué es un embedding?";
  const embedding = await embeddingService.generateEmbedding(text);

  console.log("Strategy:", embeddingService.getStrategyName());
  console.log("Configured dimension:", embeddingService.getDimension());
  console.log("Text:", text);
  console.log("Embedding length:", embedding.length);
  console.log("Embedding preview:", embedding.slice(0, 10));
}

bootstrap().catch((error) => {
  console.error("Application error:", error);
});