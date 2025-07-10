import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

const CHAT_ENDPOINT = "https://api.openai.com/v1/chat/completions";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("OPENAI_API_KEY environment variable is missing");
}

const openai = new OpenAIApi(new Configuration({ apiKey }));

export async function chatWithGPT(
  messages: ChatCompletionRequestMessage[],
  model: string = "gpt-3.5-turbo"
): Promise<string> {
  try {
    const res = await fetch(CHAT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages }),
    });

    if (!res.ok) {
      if (res.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      const text = await res.text();
      throw new Error(text || "OpenAI request failed");
    }

    const data = await res.json();
    return data.choices[0]?.message?.content?.trim() || "";
  } catch (err: any) {
    throw new Error(err.message || "OpenAI request failed");
  }
}

export async function generateImage(
  prompt: string,
  size: string = "512x512"
): Promise<string> {
  try {
    const res = await openai.createImage({ prompt, n: 1, size });
    return res.data.data[0]?.url || "";
  } catch (err: any) {
    if (err.response?.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    throw new Error(err.message || "Image generation failed");
  }
}

export default openai;
