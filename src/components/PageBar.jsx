import { AppBar, Toolbar, Typography } from "@mui/material"

function PageBar({ drawerWidth }) {
  const nowDate = new Date

  return (
    <AppBar
      position="static"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
      }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div">
          Date: {nowDate.getDate()}/{nowDate.getMonth()}/{nowDate.getFullYear()}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default PageBar