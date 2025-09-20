import React from 'react'
import { Link } from 'react-router-dom'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import '../App.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>
            <Link to="/">
            <h3>
                <ElectricBoltIcon style={{ fontSize: "50px", color: '#8233D7' }} />SocialAi
            </h3>
            </Link>
        </div>
        <div className='menubar'>
            <ul>
                <li> <Link to="/login" className='button'>Sign in</Link></li>
                <li> <Link to="/register" className='button'>Sign up</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar