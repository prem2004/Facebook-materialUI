import { Box,List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ModeNight } from '@mui/icons-material';

const Sidebar = (props) => {
  return (
    <Box flex={1} p={2} sx={{ display:{xs:"none", sm:"block"} }}>
      <Box sx={{position:'fixed'}}>
     <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friend" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={()=>{props.mode==="dark" ? props.setMode('light'):props.setMode('dark') }}/>
            </ListItemButton>
          </ListItem>

        </List>
        </Box>
    </Box>
  )
}

export default Sidebar