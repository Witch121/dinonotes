import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 5000;
const DATA_FILE = "./notes.json";

app.use(cors());
app.use(bodyParser.json());

const readNotes = () => {
  const data = fs.existsSync(DATA_FILE) ? fs.readFileSync(DATA_FILE) : "[]";
  return JSON.parse(data);
};

const writeNotes = (notes) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
};

// GET all notes
app.get("/notes", (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// POST create new note
app.post("/notes", (req, res) => {
  const notes = readNotes();
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  notes.push(newNote);
  writeNotes(notes);
  res.status(201).json(newNote);
});

// PUT update note
app.put("/notes/:id", (req, res) => {
  const notes = readNotes();
  const noteIndex = notes.findIndex((n) => n.id === req.params.id);
  if (noteIndex === -1) return res.status(404).json({ message: "Note not found" });

  notes[noteIndex] = {
    ...notes[noteIndex],
    title: req.body.title,
    content: req.body.content,
    updatedAt: new Date(),
  };
  writeNotes(notes);
  res.json(notes[noteIndex]);
});

// DELETE note
app.delete("/notes/:id", (req, res) => {
  let notes = readNotes();
  notes = notes.filter((n) => n.id !== req.params.id);
  writeNotes(notes);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});