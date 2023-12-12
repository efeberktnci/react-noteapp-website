import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({dummy}) => {
    console.log(dummy)
  return (
    <Link to={`/edit-note/${dummy.id}`} className='note'>
        <h4>
            {dummy.title.length > 50 ? dummy.title.substr(0,50) + "..." : dummy.title}
        </h4>
        <p>{dummy.date}</p>
    </Link>
  )
}

export default NoteItem