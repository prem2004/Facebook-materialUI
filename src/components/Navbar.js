import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from '@mui/icons-material';
import p1 from '../images/p1.jpg' 




const StyledToolbar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const Search=styled("div")(({theme}) =>({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius: '2px',
  width:'40%'
}))

const Icons=styled(Box)(({theme}) =>({
  display:'none',
  gap:'20px',
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'flex',
  }

}))

const UserBox=styled(Box)(({theme}) =>({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up("sm")]:{
    display:'none',
  }
}))



const Navbar = () => {
  const[open,setOpen]=useState(false)
  const handleClose=()=>{

  }
  let anchorEl=""
  
  
  return (
    <AppBar position='sticky'>
      <StyledToolbar> 
        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>FaceBook</Typography>
        <PetsIcon sx={{display:{xs:'block',sm:'none'}}}></PetsIcon>
        <Search>
          <InputBase placeholder='Search...'></InputBase>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
            <Mail />
         </Badge>
        <Badge badgeContent={4} color="error">
            <Notifications />
         </Badge>
         <Avatar sx={{ width:30, height:30}} src={p1} onClick={(e)=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar sx={{ width:30, height:30}} src={p1}/>
        <Typography variant='span'>Jon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar