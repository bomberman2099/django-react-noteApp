import { useState, useEffect } from "react"
import ListItem from "../components/listitem"


const NoteListPage = () => {
  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () =>{
    let responce = await fetch("http://127.0.0.1:8000/api/notes/")
    let data = await responce.json()
    setNotes(data)
  }
  return (
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note}/>
        ))}
      </div>
    </div>
  )
}

export default NoteListPage
