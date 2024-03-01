import styled from 'styled-components'
import { Link } from "react-router-dom"


const Base = () => {
    
  return (
   <Navbar>
   <div className='nav'>
   <div className='container-fluid'>
   <ul>
   <li><Link to={'/'}>Home</Link></li>
   <li><Link to={'/about'}>About</Link></li>
   <li><Link to={'/contact'}>Contact</Link></li>
   
   </ul>
   
   
   </div>
   
   
   </div>
   
   </Navbar>
  )
}

export default Base

const Navbar=styled.div`
.nav{
    background-color: pink;
}

.nav ul{
    display: flex;
    justify-content: space-around;
}

.nav ul li{
    list-style: none;
    font-size: 20px;
    font-weight: bold;
}

`;