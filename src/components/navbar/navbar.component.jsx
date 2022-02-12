import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.styles.scss';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export default function Navbar() {
  return (
    <Fragment className='header'>
      <ul className='nav'>
        <li>
          <Link to='/' onClick={scrollToTop} className='nav-item nav-left'>
            JE.
          </Link>
        </li>
        <ul className='nav-sm-container'>
          <li>
            <Link to='/about' className='nav-sm'>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className='nav-sm'>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to='/devlog' className='nav-sm'>
              DEVLOG
            </Link>
          </li>
          <li>
            <Link to='/lab' className='nav-sm'>
              LAB
            </Link>
          </li>
        </ul>
        <li>
          <Link to='/' onClick={scrollToTop} className='nav-item nav-right'>
            STELLA LEE
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}
