import { EmbeddingService } from "./embeddings/EmbeddingService";
import { OpenAIEmbeddingStrategy } from "./embeddings/providers/OpenAIEmbeddingStrategy";

async function bootstrap(): Promise<void> {
  const strategy = new OpenAIEmbeddingStrategy();
  const embeddingService = new EmbeddingService(strategy);

  const text = "¿Qué es un embedding?";
  const embedding = await embeddingService.generateEmbedding(text);

  console.log("Strategy:", embeddingService.getStrategyName());
  console.log("Dimension:", embeddingService.getDimension());
  console.log("Text:", text);
  console.log("Embedding length:", embedding.length);
  console.log("Embedding preview:", embedding.slice(0, 10));
}

bootstrap().catch((error) => {
  console.error("Application error:", error);
});