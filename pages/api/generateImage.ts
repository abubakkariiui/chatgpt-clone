import type { NextApiRequest, NextApiResponse } from "next";
import { generateImage } from "../../lib/openaiService";

type Data = {
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, size } = req.body;

  if (!prompt) {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }

  try {
    const url = await generateImage(prompt, size);
    res.status(200).json({ url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
