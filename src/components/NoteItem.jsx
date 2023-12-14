import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ notes }) => {
  // console.log(notes);
  return (
    <Link to={`/edit-note/${notes.id}`} className="note">
      <h4>
        {notes.title.length > 30 ? notes.title.substr(0, 30) + "..." : notes.title}
      </h4>
      <p>{notes.date}</p>
    </Link>
  );
};

export default NoteItem;
