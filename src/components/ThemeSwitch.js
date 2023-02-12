import Stack from '@mui/material/Stack';
import Switch from 'react-ios-switch';


export function ThemeSwitch({checked,setChecked,appear,setAppear}) {
  
    const handleClick = () => {
          setChecked(!checked);    
          setAppear(true)
          setTimeout(()=>{setAppear(false)}, 2000)
    }

    return (
        <Stack 
        style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          color:'#ffffff'
          }}>
        <span style={{
          paddingRight:10, 
          paddingTop:5,
          color: checked ? '#918E9B' : '#2B283A',
          }}>Light</span>
        <span><Switch
            checked = {checked}
            onChange={handleClick}
            name="Dark Mode"
            color="primary"
            onColor="black"
            size="small"
            width="10"
            height="10"
          /> </span>
          
        <span style={{
          paddingTop:5, 
          paddingLeft:10,
          color: checked ? '#FFFFFF' : '#D5D4D8',
          }}>Dark</span>
      </Stack>
    )
}

