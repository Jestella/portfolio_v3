import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button.component';

import './Devlog.styles.scss';

const Devlog = () => {
  return (
    <Fragment>
      <div className='devlog'>
        <div className='devlog-container'>
          <h1>Coming Soon...⚠️</h1>
          <Link to='/' className='btn'>
            <button className='dev-btn'>go back</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Devlog;
