import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import nature from '../images/nature.jpg'

const Post = () => {
  return (
    
      <Card sx={{ maxWidth: '100%', margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        width='100%'
        image={nature}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
         
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={ <Favorite sx={{color:'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
    </Card>
  )
}

export default Post