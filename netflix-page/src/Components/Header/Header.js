import React from 'react'
import "./header.css";
import logo from "../../assets/images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='header-outer-container'>
        <div className='header-container'>
            <div className='header-left'>
            <ul>
              <li><img src={logo} alt='logo.png' width= "100"/></li>
              <li>NetFlix</li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
               <li>Latest</li>
                <li>MyList</li>
                <li>Browse my Languages</li>
            </ul>

            </div>
            <div className='header-right'>
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Header;