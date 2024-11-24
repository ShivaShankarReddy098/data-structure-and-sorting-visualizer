import { chatSession } from "./GeminiApi";

export async function aiRes(userPrompt) {
  const result = await chatSession.sendMessage(userPrompt);
  const AIResponse = result.response.text();
  console.log(AIResponse);
  return AIResponse;
}
