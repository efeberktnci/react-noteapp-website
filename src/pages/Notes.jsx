import React, { useState } from 'react'
import {CiSearch} from "react-icons/ci"
import {MdClose} from "react-icons/md"
import {FaPlus} from "react-icons/fa6"
import notes from "../dummy_notes"
import NoteItem from '../components/NoteItem'
import { Link } from 'react-router-dom'

const Notes = () => {
  const [showSearch, setShowSearch]= useState(false)
  return (
    <section className='container'>
      <header className='notes__header'>
        <h2>Notlarım</h2>
        <input type='text' placeholder='Aramak istediğiniz kelimeyi giriniz' />
        <button className='btn'>
         {showSearch ? <MdClose/> : <CiSearch/> }
        </button>
      </header>
      <div className="notes__container">
        {/* <p className='empty_notes'>Not eklemek ister misiniz ?</p> */}
        {notes.map((notes)=>(
          <NoteItem key={notes.id} notes={notes} />
        ))}

      </div>
      <Link className='btn add__btn' to="create-note">
      <FaPlus/>
      </Link>
    </section>
  )
}

export default Notes