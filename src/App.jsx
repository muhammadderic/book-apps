import { Route, Routes } from "react-router-dom"
import Create from "./pages/Create"
import Notes from "./pages/Notes"
import Layout from "./components/Layout"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#316B83"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
