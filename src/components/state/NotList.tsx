import { useState } from "react";

const NoteList: React.FC = () => {
  const [note, setNote] = useState("");

  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNote("");
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <h1>NoteList</h1>
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <div
        onDrag={handleDrag}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <input type="text" value={note} onChange={handleChange} />
      <form onSubmit={handleAddNote}>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NoteList;
