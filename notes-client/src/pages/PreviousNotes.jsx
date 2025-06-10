import React, { useEffect, useState } from "react";
import { getNotes, updateNote, deleteNote } from "../api/notes";

function PreviousNotes() {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const startEditing = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleSaveEdit = async () => {
    if (title.length<3 || content<3 ) {
      alert("Both title and content must be at least 3 characters long.");
      return;
    }
    try {
      await updateNote(editingId, { title, content });
      setEditingId(null);
      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setContent("");
  };

const filteredNotes = notes.filter(note => {
  const searchMatch =
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase());

  const noteDate = new Date(note.createdAt);
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  const dateMatch =
    (!start || noteDate >= start) &&
    (!end || noteDate <= end);

  return searchMatch && dateMatch;
});

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="p-4 shadow flex flex-wrap gap-4 mb-4 items-center">
          <input
            type="text"
            placeholder="I'm looking for..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered"
          />
          <span>to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered"
          />
        </div>

      <div className="flex flex-wrap gap-4">
        {filteredNotes.map((note) => (
          <div key={note.id} className="card w-80 bg-base-100 shadow-md p-4 items-center text-center">
            {editingId === note.id ? (
              <>
                <input
                  className="input input-bordered w-full my-2 validator"
                  value={title}
                  pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                />
                <textarea
                  className="textarea textarea-bordered w-full my-2 validator"
                  value={content}
                  pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="3000" title="Only letters, numbers or dash"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
                  required
                />
                <div className="card-actions justify-end">
                  <button className="btn btn-success" onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button className="btn btn-ghost" onClick={cancelEdit}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="card-title">{note.title}</h2>
                <h4 className="text-xs text-gray-400">Created: {new Date(note.createdAt).toLocaleString()}</h4>
                <h4 className="text-xs text-gray-400">Updated: {new Date(note.updatedAt).toLocaleString()}</h4>
                <p>{note.content}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => startEditing(note)}>
                    Edit
                  </button>
                  <button className="btn btn-error" onClick={() => handleDelete(note.id)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default PreviousNotes;
