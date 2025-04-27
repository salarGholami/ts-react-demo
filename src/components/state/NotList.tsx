import { useState } from "react";

const NoteList: React.FC = () => {
  const [note, setNote] = useState("");

  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = () => {
    setNote("");
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div>
      <h1>NoteList</h1>
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleAddNote}>add</button>
    </div>
  );
};

export default NoteList;
