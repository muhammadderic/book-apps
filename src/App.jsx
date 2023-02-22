import { Route, Routes } from "react-router-dom"
import Create from "./pages/Create"
import Notes from "./pages/Notes"
import Layout from "./components/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Layout>
  )
}

export default App
