import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Settings } from '@mui/icons-material';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import { Box, margin, Stack } from '@mui/system';
import styled from '@emotion/styled';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed'
import Navbar from './components/Navbar';
import Add from './components/Add'
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState('light')
  const[modeflag,setModeflag]=useState(false)

  const darkTheme=createTheme({
  palette:{
    mode:mode
  }

  })

  const handlemode=(e)=>{
    setModeflag(!modeflag)

    if(modeflag)
    {
      setMode('light')
    }else{
      
      setMode('dark')
    }
    
  }
const BlueButton=styled(Button)({
   backgroundColor:'skyblue',color:'#888', margin:5,
   "&:hover":{
    backgroundColor:"lightblue",

   },
   "&:disabled":{
    backgroundColor:'gray',
    color:'white'
   }
  })

  return (
    <ThemeProvider theme={darkTheme}> 
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent="space-between">
         <Sidebar handlemode={handlemode} mode={mode} setMode={setMode}/>
         <Feed/>
         <Rightbar/>
       </Stack>
       <Add/>
    </Box>
    </ThemeProvider>

  );
}

export default App;
