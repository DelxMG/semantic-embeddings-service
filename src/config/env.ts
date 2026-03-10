import "dotenv/config";

function getEnvVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function getOptionalNumber(value: string | undefined, defaultValue: number): number {
  if (!value) {
    return defaultValue;
  }

  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`Invalid numeric environment variable value: ${value}`);
  }

  return parsedValue;
}

export const env = {
  embeddingProvider: getEnvVariable("EMBEDDING_PROVIDER"),
  openAiApiKey: process.env.OPENAI_API_KEY ?? "",
  openAiEmbeddingModel: process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small",
  openAiEmbeddingDimensions: getOptionalNumber(
    process.env.OPENAI_EMBEDDING_DIMENSIONS,
    1536
  ),
  qdrantUrl: getEnvVariable("QDRANT_URL"),
  qdrantCollectionName: getEnvVariable("QDRANT_COLLECTION_NAME")
};