import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../api/notes";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length<3 || content<3 ) {
      alert("Both title and content must be at least 3 characters long.");
      return;
    }

    try {
      await createNote({ title, content });
      navigate("/previous-notes");
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Input your note</legend>

        <label className="label mt-4 lg:tooltip text-lg" data-tip="Must be 3 to 30 characters containing only letters, numbers or dash">Title</label>
        <input
          type="text"
          className="input input-bordered w-full validator"
          required
          placeholder="Note title"
          pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />

        <label className="label mt-4 lg:tooltip text-lg" data-tip="Must be 3 to 30 characters containing only letters, numbers or dash">Content</label>
        <textarea
          className="textarea textarea-bordered w-full validator"
          required
          placeholder="Write something poetic or unhinged"
          pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="3000" title="Only letters, numbers or dash"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleSubmit}>
          Save
        </button>
      </fieldset>
    </>
  );
}

export default CreateNotes;
