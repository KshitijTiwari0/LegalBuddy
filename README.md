# 🇮🇳 LegalAdvisor.in – Constitution-Aware AI Chatbot

An intelligent, RAG-powered chatbot that delivers accurate, contextually grounded answers about the **Indian Constitution**. This AI assistant is built to educate, inform, and assist users with legal questions based solely on the **official Constitution of India**, without any external interpretation.

---

## 📌 Live Demo

👉 [Try it here](https://spectacular-marzipan-f6da9e.netlify.app/)

---

## ✨ Features

- **AI-Powered Constitutional Advisor**: Ask anything about Articles, Schedules, Amendments, Fundamental Rights, Directive Principles, and more.
- **100% Constitution-Sourced**: Answers strictly derived from the original Indian Constitution PDF.
- **Real-Time Retrieval-Augmented Generation (RAG)** pipeline.
- **Modern, Minimal UI**: Designed for trust and accessibility.
- **Built for Students, Aspirants, and Legal Enthusiasts**.

---

## ⚙️ How It Works

1. **📄 PDF Source**: Indian Constitution PDF uploaded to Google Drive.
2. **📖 Text Processing**: Document is chunked using `RecursiveCharacterTextSplitter`.
3. **🧠 Embedding Generation**: Uses **Google Gemini Embedding API** for vector creation.
4. **📦 Vector Indexing**: Stored in **Pinecone** with 786-dimensional vectors.
5. **🔍 Query Handling**: User query sent to **n8n**, which performs semantic search over vectors.
6. **🗨️ Response Generation**: Top-matched chunks are passed to **Gemini Chat Model** for answer formulation.
7. **💬 Response Display**: Delivered in an interactive chat UI (deployed via Netlify).

---

## 🧰 Built With

- **Frontend**: HTML + CSS (custom static site)
- **LLM**: Google Gemini (Embeddings + Chat)
- **Vector Store**: Pinecone
- **Automation**: n8n Workflow
- **Deployment**: Netlify
- **PDF Handling**: PyMuPDF, LangChain

---

## 📚 Use Cases

- Legal Education & Civic Literacy
- Research & Reference for Students
- Civil Services Preparation
- Public Access to Constitutional Knowledge

---

## 🗺️ Roadmap

- [x] Dynamic topic prompts (e.g., “What is Article 21?”)
- [x] Chat UI with real-time responses
- [ ] Contextual follow-up support (chat memory)
- [ ] Searchable FAQ interface for topics & updates
- [ ] Expert lead form and calendar integration
- [ ] Mobile responsiveness and accessibility
- [ ] Interactive legal resource cards with modals

---

## 📸 Screenshots

![UI Screenshot](./screenshots/legaladvisor-ui.png)

---

## 💡 Contributing

Have ideas to improve this civic-tech tool? Contributions are welcome!  
Feel free to open issues or pull requests for UI/UX improvements, integrations, or documentation updates.

---

## 📄 License

This project is open-source and available under the **MIT License**.  
Note: All answers provided by the AI chatbot are **informational** and not a substitute for professional legal advice.

---

## 🙌 Acknowledgements

- Indian Constitution (Govt. of India PDF)
- Google Gemini API
- Pinecone Vector Database
- n8n Automation Platform
