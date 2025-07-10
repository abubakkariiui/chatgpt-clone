# ChatGPT Clone

This project demonstrates a simple chat interface powered by OpenAI. It uses the ChatGPT API for conversational responses and DALL·E for on demand image generation.

## Features

- Text chat with `gpt-3.5-turbo` or any compatible model.
- Image generation via DALL·E.
- Authentication with Google using `next-auth`.
- Messages are persisted in Firestore.

## Running locally

```bash
npm install
npm run dev
```

Set the `OPENAI_API_KEY` environment variable to your OpenAI key before starting the server.
