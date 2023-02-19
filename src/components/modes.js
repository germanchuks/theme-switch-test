import { useState } from 'react';
import {Stack} from '@mui/material';
import Switch from 'react-ios-switch';

export default function Modes() {

  const [mode, setMode] = useState("Off");
  const [isClicked, setIsClicked] = useState(false);
  const [appear, setAppear] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
    setAppear(true)
    setTimeout(()=>{setAppear(false)}, 2000)
    setMode(isClicked ? "Off": "On");
  }
  
  return (
    <div style={{
      width:'100%',
      height:'100vh',
      backgroundColor: isClicked ? 'black' : 'grey',
      color: isClicked ? 'white' : 'black',
      transitionDuration: "1s" 
    }}>
      
      <Stack direction="row">
        <p style={{paddingBottom:-20}}>Light</p>
        <Switch
            checked={isClicked}
            onChange={(e) => { handleClick() }}
            name="Dark Mode"
            color="primary"
            onColor="red"
          /> 
          
        <p style={{paddingTop:5}}>Dark</p>
      </Stack>
  
      <h1>WOW!!!</h1>
      <p style={{
        display:"flex",
        width:"100%",
        color:"white",
        justifyContent:"center",
        transition:"opacity, 1s",
        transitionDuration: 2,
        opacity: appear ? 0.9 : 0,
      }}>Dark Mode: {mode}</p>
    </div>
  )
}
