import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../../static/assets/logo_white.svg';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
