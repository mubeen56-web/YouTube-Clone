import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/name.png.jpg'
import { Link } from 'react-router-dom' 
const Navbar = ({setsidebar,setcard,showCircle,card}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu_icon'onClick={()=>setsidebar(prev=>prev===false?true:false)}  src={menu_icon} alt="" />
           <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type="text" name="" id="" placeholder='Search' />
            <img src={search} alt="" />
            </div>
        </div>
        <div className="nav-right flex-div">
             <img src={upload} alt="" />
             <img src={more} alt="" />
             <img src={notification} alt="" />
             <img src={profile} className='user-icon' onClick={()=>{setcard(prev=>prev===false?true:false),showCircle(prev=>prev===false?true:false)}}  alt="" />
        </div>
        <div className={`circle ${card? '': 'circleshow'}`}></div>
    </nav>
  )
}

export default Navbar