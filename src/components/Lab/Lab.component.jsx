import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Lab.styles.scss';

const Lab = () => {
  return (
    <Fragment>
      <div className='lab'>
        <div className='lab-container'>
          <h1>Coming Soon...💡</h1>
          <Link to='/' className='btn'>
            <button className='dev-btn'>go back</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Lab;
