import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import notes from "../dummy_notes";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        // match:eşleşen kısmı bulmak için kullandık
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };
  
  useEffect(handleSearch,[text])

  return (
    <section className="container">
      <header className="notes__header">
        <h2>Notlarım</h2>
        <input
          type="text"
          placeholder="Aramak istediğiniz kelimeyi giriniz"
          onChange={(e) => {
            setText(e.target.value);
            handleSearch();
          }}
        />

        <button className="btn">
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && (<p className="empyt_notes">Not eklemek istermisiniz ?</p>)}
        {filteredNotes.map((notes) => (
        <NoteItem key={notes.id} notes={notes}/>
        ))}
      </div>
      <Link className="btn add__btn" to="create-note">
        <FaPlus />
      </Link>
    </section>
  );
};

export default Notes;
