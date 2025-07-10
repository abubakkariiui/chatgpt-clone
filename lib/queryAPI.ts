import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    if (model.startsWith("gpt-")) {
      const res = await openai.createChatCompletion({
        model,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      return res.data.choices[0].message?.content?.trim();
    }

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
