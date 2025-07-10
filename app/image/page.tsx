"use client";
import { useState } from "react";

export default function ImagePage() {
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const generate = async () => {
    setLoading(true);
    setUrl(null);
    const res = await fetch("/api/generateImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setLoading(false);
    setUrl(data.url);
  };

  return (
    <div className="p-4 space-y-4 text-white bg-[#343541] h-screen">
      <h1 className="text-2xl font-bold">Image Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 text-black"
        placeholder="Describe the image you want"
      />
      <button
        onClick={generate}
        disabled={!prompt || loading}
        className="px-4 py-2 bg-[#11A37F] text-white rounded disabled:opacity-50"
      >
        Generate
      </button>
      {url && (
        <div className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="Generated" className="max-w-full" />
        </div>
      )}
    </div>
  );
}
