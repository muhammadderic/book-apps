import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import EventNoteIcon from '@mui/icons-material/EventNote';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    text: "My Notes",
    path: "/",
    icon: <EventNoteIcon />
  },
  {
    text: "Create Note",
    path: "/create",
    icon: <NoteAddIcon />
  }
]

function LeftDrawer({ drawerWidth }) {
  const navigate = useNavigate()

  return (
    <Drawer
      sx={{ width: drawerWidth }}
      variant="permanent"
      anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map(item => (
          <ListItem
            key={item.text}>
            <ListItemButton
              sx={{ p: 1 }}
              onClick={() => navigate(item.path)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default LeftDrawer