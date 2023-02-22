import { Masonry } from "@mui/lab"
import { useEffect, useState } from "react"

function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <Masonry
      columns={3}
      spacing={1}>
      {notes.map(note => (
        <p>
          {note.title}
        </p>
      ))}
    </Masonry>
  )
}

export default Notes