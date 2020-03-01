import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../static/Logo/dominos.png';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className='navbar navbar-expand-md navbar-light fixed-top'
          style={{ backgroundColor: '#0066A7' }}
        >
          <div className='container' style={{ marginLeft: '42px' }}>
            <Link
              className='navbar-brand'
              to='/'
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <img
                src={logo}
                width='60'
                height='32'
                className='d-inline-block align-top'
                alt=''
              />
              <span style={{ marginLeft: '-12px' }}>Domino's Pizza</span>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
