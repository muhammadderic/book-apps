import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const handleBgAvatar = (category) => {
  if (category === "life") {
    return "#C9F4AA"
  } else if (category === "work") {
    return "#B4E4FF"
  } else if (category === "study") {
    return "#FDFDBD"
  } else {
    return "#FF8787"
  }
}

function NoteCard({ note, handleDelete }) {
  return (
    <Card
      sx={{ m: 1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: handleBgAvatar(note.category) }} />
        }
        action={
          <IconButton
            onClick={() => handleDelete(note.id)}>
            <DeleteIcon
              color="warning" />
          </IconButton>
        }
        title={note.title}
        subheader={note.category} />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard