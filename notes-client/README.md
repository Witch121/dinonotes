# 🦕 DinoNotes

**DinoNotes** is a responsive, JavaScript-based note-taking web application that allows users to create, edit, delete, and search notes with an intuitive interface and simple local data persistence.

Built as a small-scale full-stack project, this app emphasizes clean UI/UX design, efficient client-server interaction via a custom API, and practical functionality such as real-time search and date-based filtering.

---

## 🔧 Tech Stack

| Technology             | Role                                |
| ---------------------- | ----------------------------------- |
| React (JavaScript)     | Frontend framework                  |
| Express.js             | Backend server and API routing      |
| JSON (local file)      | Simulated database for persistence  |
| Tailwind CSS + DaisyUI | Styling and responsive layout       |
| Vite                   | Development bundler for fast builds |
| React Router           | Client-side routing                 |

---

## ✨ Features

- **Create, edit, and delete** notes using a structured form
- **Live search** through notes by title or content
- **Date-based filtering** (filter notes by creation date range)
- **Responsive layout** that adapts across screen sizes
- **Navigation bar** with mobile support and clean routing
- **Local JSON-based storage** via Express API (no external database or cloud dependencies)

---

## 🚀 Local Setup

## Clone Repository

```bash
git clone https://github.com/Witch121/dinonotes.git
cd dinonotes
```

## Run the Backend

```bash
cd notes-api
npm install
nodemon index.js
```

## Run the Frontend

```bash
cd ../notes-client
npm install
npm run dev
```

- **Make sure** your backend is running on port 5000, and your frontend on 5173 (or update fetch URLs accordingly).

---

## 📣 Final Note

**DinoNotes** was created with simplicity, usability, and real-world practicality in mind. It’s a lightweight but feature-complete project, demonstrating frontend-backend integration and thoughtful user interaction design—all in vanilla JavaScript.

For inquiries, suggestions, or collaboration opportunities, feel free to reach out via GitHub or LinkedIn.
