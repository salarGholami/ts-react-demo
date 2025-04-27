import { useState } from "react";

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState("");

  const handleAddNote = () => {};

  return (
    <div>
      <h1>NoteList</h1>
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={handleAddNote}>add</button>
    </div>
  );
};

export default NoteList;
