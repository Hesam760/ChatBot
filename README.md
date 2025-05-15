# 📚 Persian Chatbot (RAG-based)

This repository contains a full-stack AI-powered chatbot designed to answer questions about lessons using **Retrieval-Augmented Generation (RAG)**. It is built using:

- 🧠 Fine-tuned **Gemma3** model on Persian
- 📝 **Persian PDF documents** as the knowledge base
- 🧬 **Persian embedding model**
- 🗃️ **ChromaDB** for vector storage
- 🔗 **LangChain** and **Ollama** for RAG logic
- 🚀 **Flask + Ngrok** API backend (hosted on **Google Colab**)
- 💬 **React + Vite** frontend chatbot UI

---

## 🎯 Features

- 💡 Ask questions in Persian about lessons subjects.
- 🔍 Retrieves relevant Persian passages using embeddings.
- 🤖 Generates contextual answers with a fine-tuned Gemma model.
- 🌐 API-based architecture: clean separation between backend and frontend.
- 🌍 Use of **Ngrok** to expose API from Google Colab to the frontend.

---

## 🛠️ Technologies Used

| Layer       | Tech Stack                                      |
|-------------|-------------------------------------------------|
| Backend     | Python, Flask     |
| Model       | Gemma (fine-tuned on Persian), Persian Embeddings, LangChain, Ollama, ChromaDB  |
| Hosting     | Google Colab + Ngrok                            |
| Frontend    | React, Vite                                     |

---

## 🚀 Getting Started

### ⚙️ Backend (Google Colab or Local)

> ⚠️ Requires a high-end GPU (e.g. **NVIDIA 4090**) if you want to run locally. Otherwise, use **Google Colab**.

1. Open `RAG.ipynb` in Google Colab.
2. Run each **cell sequentially** (top to bottom) without skipping.
3. This:
    - Loads the fine-tuned Gemma model.
    - Loads PDF documents in Persian.
    - Embeds and stores them in ChromaDB.
    - Sets up a Flask API via Ngrok.
4. At the end, copy the **Ngrok public URL** (e.g., `https://xxxx.ngrok-free.app`) — this is needed for the frontend.

### 💬 Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Notes
To use Ngrok, you must sign up and get an authtoken, then config it in Colab:

!ngrok config add-authtoken YOUR_AUTHTOKEN

---

## 📸 Demo
![Chatbot UI](https://github.com/Hesam760/ChatBot/blob/master/Screenshots/ChatbotUI.png)
