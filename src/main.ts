import { EmbeddingService } from "./embeddings/EmbeddingService";
import { FakeEmbeddingStrategy } from "./embeddings/providers/FakeEmbeddingStrategy";

async function bootstrap(): Promise<void> {
  const strategy = new FakeEmbeddingStrategy();
  const embeddingService = new EmbeddingService(strategy);

  const text = "¿Qué es un embedding?";
  const singleEmbedding = await embeddingService.generateEmbedding(text);

  console.log("Strategy:", embeddingService.getStrategyName());
  console.log("Dimension:", embeddingService.getDimension());
  console.log("Text:", text);
  console.log("Embedding:", singleEmbedding);

  const texts = [
    "Hola mundo",
    "Qdrant almacena vectores",
    "TypeScript me ayuda a aprender arquitectura"
  ];

  const batchEmbeddings = await embeddingService.generateEmbeddings(texts);

  console.log("Batch texts:", texts);
  console.log("Batch embeddings:", batchEmbeddings);
}

bootstrap().catch((error) => {
  console.error("Application error:", error);
});