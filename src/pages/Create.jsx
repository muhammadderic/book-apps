import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("life")
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorDetails, setErrorDetails] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorTitle(false)
    setErrorDetails(false)

    if (title === "") {
      setErrorTitle(true)
    }
    if (details === "") {
      setErrorDetails(true)
    }
    if (title && details) {
      console.log(title, details, category)
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        gutterBottom>
        Create a new note
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Note Title"
          fullWidth
          required
          sx={{ mb: 2 }}
          error={errorTitle}
          onChange={(e) => setTitle(e.target.value)} />
        <TextField
          variant="outlined"
          label="Details"
          fullWidth
          required
          multiline
          rows={4}
          sx={{ mb: 2 }}
          error={errorDetails}
          onChange={(e) => setDetails(e.target.value)} />
        <FormControl
          fullWidth>
          <FormLabel>Cateogry</FormLabel>
          <RadioGroup
            defaultValue={category}
            sx={{ mb: 2 }}
            onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel
              value="life"
              control={<Radio />}
              label="Life" />
            <FormControlLabel
              value="study"
              control={<Radio />}
              label="Study" />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work" />
            <FormControlLabel
              value="sport"
              control={<Radio />}
              label="Sport" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}>
          Create
        </Button>
      </form>
    </Container>
  )
}

export default Create