import logoSmall from '../img/reactjs-icon-small.png'
import { ThemeSwitch } from '../components/ThemeSwitch.js'


export default function Header({checked,setChecked,appear,setAppear}) {
 
    return (
        <header className="header"
          style={{backgroundColor: checked ? '#21222A' : '#fff',
          height:150,
          width:"100vw", 
          padding:"1.5rem 3rem", 
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px -3px 5px inset',
          transition:"backgroundColor, 1s",
          transitionDuration: 2,
          }}>
          <a href='/' className="logo" style={{
            display:"flex",
            alignItems:"center",
            padding:10
          }}>
            <img src={logoSmall} alt="React Logo" style={{
                width:45,
                height:45
            }} />
            <span style={{
              paddingLeft:10,
              fontWeight:700,
              fontSize:'2.4rem',
              color: "#61DAFB",
            }}>
              ReactFacts</span>
          </a>
          <ThemeSwitch checked={checked} setChecked={setChecked} appear={appear} setAppear={setAppear} />
          <a href='/' className='logo-left'>
            <span style={{
              color: checked ? "#DEEBF8" : "#2B283A",
              fontWeight:600,
              fontSize:'1.8rem',
              paddingRight:10,
            }}>React Course - Project  2</span>
            
          </a>
        </header>
    )
}

// export default Header()