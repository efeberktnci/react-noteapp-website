import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  return (
    <section>
      <header className="create-note__header">
        <Link>
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Kaydet</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Başlık" autoFocus value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea  rows="28" placeholder="Not Detayı..." value={details} onChange={(e)=>setDetails(e.target.value)} ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
