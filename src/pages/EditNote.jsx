import React from 'react'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link , useParams} from 'react-router-dom'
import {MdDelete} from "react-icons/md"

const EditNote = ({notes,setNotes}) => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const { id } = useParams();
  const note = notes.find((item)=> item.id == id)
  
  return (
    <section>
      <header className='create-note__header'>
        <Link className='btn' to="/">
        <IoIosArrowBack/>
        </Link>
        <button className='btn lg primary'>Kaydet</button>
        <button className='btn lg danger'>
          <MdDelete/>
        </button>
      </header>
      <form className='create-note__form'>
        <input 
        type="text"
         placeholder='Başlık'
         autoFocus
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        <textarea  
        rows="28" 
        placeholder="Not Detayı..." 
        value={details} 
        onChange={(e)=>setDetails(e.target.value)} >
        </textarea>
      </form>
    </section>
  )
}

export default EditNote