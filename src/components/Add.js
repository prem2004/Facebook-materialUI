import { Fab, IconButton, Modal, Tooltip, Typography,Box,Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import React, { Fragment, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import p4 from '../images/p1.jpg'
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyleModal=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})

const UserBox=styled((Box))({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  marginBottom:'20px'
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const Add = () => {
    const[open,setOpen]=useState(false)
    
    const handleClose=(e)=>{
        setOpen(false)
    }

  return (
     <Fragment>
      <Tooltip title="Add"  onClick={()=>setOpen(true)}  sx={{
        position:'fixed',
        bottom:20,
        left:{ xs:"cal(50% - 25px)", md:30}
      }}>
       <Fab color="primary" aria-label="add">
        <AddIcon  />
       </Fab>
    </Tooltip>

     

    <StyleModal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
    <Typography id="modal-modal-title" variant="h6" color="gray" textAlign="center" component="h2">
      Create post
    </Typography>
     <UserBox>
     <Avatar alt="Remy Sharp" src={p4} sx={{width:30, height:30}} />
      <Typography fontWeight={500} variant='span'>John Doe</Typography>
     </UserBox>
     <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind?"
          variant="standard"
          sx={{width:'100%'}}
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color="primary"/>
          <ImageIcon color="secondary"/>
          <VideoCameraBackIcon color='success'/>
          <PersonAddIcon color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
          <Button>Post</Button>
          <Button sx={{width:'100px'}}><DateRangeIcon color="red"/></Button>
          
       </ButtonGroup>
    </Box>
</StyleModal>


    </Fragment>
  )
}

export default Add