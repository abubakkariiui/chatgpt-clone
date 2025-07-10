import { chatWithGPT } from "./openaiService";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    if (model.startsWith("gpt-")) {
      return await chatWithGPT([{ role: "user", content: prompt }], model);
    }

    // Fallback to legacy completions for older models
    const { default: openai } = await import("./openaiService");
    const res = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.data.choices[0].text?.trim();
  } catch (err: any) {
    return `ChatGPT was unable to find an answer for that! (Error: ${err.message})`;
  }
};

export default query;
