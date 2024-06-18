import React from 'react'
import './Navbar.css'
 import logo from '../../assets/logo.png'
 import search_icon from '../../assets/search_icon.svg'
 import bell_icon from '../../assets/bell_icon.svg'
 import profile_img from '../../assets/profile_img.png'
 import caret_icon from '../../assets/caret_icon.svg'
 import { useState } from 'react'

 import { useAuth0 } from "@auth0/auth0-react";

 

 const Navbar = ({ onSearch }) => {
    const { loginWithRedirect } = useAuth0();
    const [isHovered, setIsHovered] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(inputValue);
            setInputValue('');
        }
    };

    
    
       
    
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div
            className="search-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`search-icon ${isHovered ? 'hovered' : ''}`}>
                🔍
            </div>
            <input
                type="text"
                className={`search-bar ${isHovered ? 'visible' : ''}`}
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
        </div>
        <div className="navbar-right">
           
       

            <img src={bell_icon} alt="" srcset="" className='icons' />
         <div className="navbar-profile">
            <img src={profile_img} alt="" srcset="" className='profile' />
            <img src={caret_icon} alt="" srcset=""  />
<div className="dropdown">
<button onClick={() => loginWithRedirect()}>Sign Out Of Netflix</button>
</div>
         </div>
        </div>
      
    </div>
  )
}

export default Navbar
