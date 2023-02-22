import { Masonry } from "@mui/lab"
import { useEffect, useState } from "react"
import NoteCard from "../components/NoteCard"

function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = (id) => {
    const confirmation = confirm("You want delete this note?")

    if (confirmation) {
      fetch("http://localhost:5000/notes/" + id, {
        method: "DELETE"
      })

      const newNotes = notes.filter(note => note.id !== id)
      setNotes(newNotes)
    }
  }

  return (
    <Masonry
      columns={3}
      spacing={1}>
      {notes.map(note => (
        <div
          key={note.id}>
          <NoteCard
            note={note}
            handleDelete={handleDelete} />
        </div>
      ))}
    </Masonry>
  )
}

export default Notes