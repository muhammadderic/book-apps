import { Container } from "@mui/material"
import LeftDrawer from "./LeftDrawer"
import PageBar from "./PageBar"

const drawerWidth = 175

function Layout({ children }) {
  return (
    <>
      <PageBar
        drawerWidth={drawerWidth} />
      <LeftDrawer
        drawerWidth={drawerWidth} />
      <Container
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        {children}
      </Container>
    </>
  )
}

export default Layout