import React from 'react';
import './Navbar.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <MenuOpenIcon sx={{ fontSize: '3rem' }}/>
    </nav>
  );
};

export default Navbar;