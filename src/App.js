import './App.css';
import Header from './components/Header.js'
import Content from './components/Content.js'
// import { ThemeSwitch } from './ThemeSwitch';
import { useState } from 'react';



function App() {

  const [checked, setChecked] = useState(true)
  // const [isClicked, setIsClicked] = useState(false);
  const [appear, setAppear] = useState(true);
  
  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  //   setAppear(true)
  //   setTimeout(()=>{setAppear(false)}, 2000)
  
  // }

  return (
    <div className="App" style={{
      display:"flex",
      overflowX:"hidden",
      flexDirection:'column',
      height:'100vh',
      width:'100%',
      font:20,
      backgroundColor:checked ? '#282D35' : '#fff',
      color: '#2B283A',
      transitionDuration: "1s"}}>
      <Header checked={checked} setChecked={setChecked} appear = {appear} setAppear={setAppear}/>
      <Content checked={checked} appear={appear}/>
    </div>
  );
}

export default App;
