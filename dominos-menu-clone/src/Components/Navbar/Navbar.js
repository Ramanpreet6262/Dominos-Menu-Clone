import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../static/assets/logo_white.svg';

const Navbar = () => {
  return (
    <div>
      <nav
        className='navbar navbar-expand-md navbar-light fixed-top'
        style={{ backgroundColor: '#0066A7', height: '50px' }}
      >
        <div className='container' style={{ marginLeft: '42px' }}>
          <Link
            className='navbar-brand'
            to='/'
          >
            <img src={logo} alt='' />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
