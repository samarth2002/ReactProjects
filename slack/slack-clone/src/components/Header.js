import React from 'react'
import './Header.css'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {useStateValue} from "../StateProvider"

function Header() {
    const [{user}] = useStateValue()
    return (
        <div className = "header">
            <div className = "header-left">
                <Avatar 
                    src={user?.photoURL}
                    alt = {user?.displayName}
                />
                <AccessTimeFilledIcon />  
            </div>
            <div className = "header-search">
                <SearchIcon />
                <input placeholder = "Who was in paris?" />
            </div>
            <div className = "header-right">
                  <HelpOutlineIcon />      
            </div>
            
        </div>
    )
}

export default Header
