import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'
import p8 from '../images/p8.jpg'
import mergeimg from '../images/mergeimg.jpg'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
//import Avatar from '@mui/material/Avatar';
//import Typography from '@mui/material/Typography';


const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{ display:{xs:"none", sm:"block"} }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friend</Typography>
          <AvatarGroup max={4}>
           <Avatar alt="Remy Sharp" src={p4} />
           <Avatar alt="Travis Howard" src={p5} />
           <Avatar alt="Cindy Baker" src={p6}/>
           <Avatar alt="Agnes Walker" src={p7} />
           <Avatar alt="Trevor Henderson" src={p8} />
         </AvatarGroup>
         <Typography variant='h6' fontWeight={100}>Latest Photos</Typography>
         <ImageList cols={1} rowHeight={100}> 
           <ImageListItem >
           <img
            src={mergeimg}
             alt="latest photo"
            loading="lazy"
            width='100%'
            />
           </ImageListItem>
         </ImageList>
         <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Convertions
         </Typography>


         
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
         <ListItemAvatar>
           <Avatar alt="Remy Sharp" src={p5} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={p6} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>





      </Box>
  </Box>
  )
}

export default Rightbar