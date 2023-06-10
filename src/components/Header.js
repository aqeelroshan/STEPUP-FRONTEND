
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
            
                
                <div className="item">
                    <Link className='link' to="/">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Children</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/product">Stores</Link>
                </div>
            </div>
            <div className="center">
                <Link className='link' to="/">STEPUP</Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Home</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/blogs">Blogs</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/contact">Contact</Link>
                </div>
                
                <div className="icons">
                    <SearchIcon />
                   <Link to="/login" id="grey"><PersonOutlineIcon /></Link> 
                    <FavoriteBorderIcon />
                    
                <div to="/cart" className="cartIcon" >
                    <Link to="/cart" id='grey'> <LocalMallOutlinedIcon /></Link>
                    <span>0</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header
