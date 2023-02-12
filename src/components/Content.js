import background from '../img/reactjs-icon-large.png'

export default function Content({checked,appear}) {
    return (
        <main style={{
            display:'flex',
            flexDirection:'column',
            position:'relative',
            padding:'0 4rem',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: '75%',
            backgroundSize: '15%',
            backgroundColor: checked ? '#282D35' : '#FFFFFF',
            transition:"backgroundColor, 1s",
            transitionDuration: 2,
          }}>
            <div className="sub-header" style={{
                color:checked ? "#FFFFFF" : '#2B283A',
                paddingTop:'3rem',
                zIndex:1,
                fontSize:'2rem',
            }}>
              <h1 style={{
                letterSpacing:'-0.02em',
                margin:0,
              }}>Fun facts about React</h1>
            </div>
            
            <div className="background-logo" style={{
                position:"absolute",
                top:"5%",
                right:0,
                transition:'none',
                height:'50%',
                width:'50%',
            }}>
                {/* <img src={background} alt='React-Logo' style={{
                  position:"absolute",
                  minHeight:'30%',
                  minWidth:'30%',
                  top:50,
                  right:0,
                  color:checked ? '#33373E' : '#F5F5F5',
                  
                  
                }} /> */}
            </div>
            <section className="list-items" style={{
                color: checked ? '#FFFFFF' : '#2B283A',
                padding:'0 0 1rem 3.5rem',
                zIndex:1,
                fontSize:'1.5rem'
            }}>
              <ul>
                <li>
                  Was first released in 2013
                </li>
                <li>
                  Was originally created by Jordan Walke
                </li>
                <li>
                  Has well over 100K stars on GitHub
                </li>
                <li>
                  Is maintained by Facebook
                </li>
                <li>
                  Powers thousands of enterprise apps, including mobile apps
                </li>
              </ul>
            </section>
            <p style={{
            display: 'flex',
            position:"absolute",
            top:'5%',
            left:"45%",
            color: checked ? "#FFFFFF" : '#000',
            transition:"display, 1s",
            transitionDuration: 3,
            opacity: appear ? 0.5 : 0,
          }}>Dark Mode: {checked ? "ON" : "OFF"}</p>
        </main>
    )
}