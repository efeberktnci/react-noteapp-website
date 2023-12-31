import React from 'react';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import useCreateDate from '../components/useCreateDate';

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);

  // Check if 'note' is defined before using its properties
  const [title, setTitle] = useState(note ? note.title : '');
  const [details, setDetails] = useState(note ? note.details : '');
  
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate('/');
  };


  const handleDelete = () =>{
   if (window.confirm("Silmek istediğinze emin misiniz ?")){
    const newNotes = notes.filter((item)=> item.id !=id);
    setNotes(newNotes);
    navigate("/")
   }
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link className='btn' to='/'>
          <IoIosArrowBack />
        </Link>
        <button className='btn lg primary' onClick={handleForm}>
          Kaydet
        </button>
        <button className='btn lg danger' onClick={handleDelete}>
          <MdDelete />
        </button>
      </header>
      <form className='create-note__form' onSubmit={handleForm}>
        <input
          type='text'
          placeholder='Başlık'
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows='28'
          placeholder='Not Detayı...'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
