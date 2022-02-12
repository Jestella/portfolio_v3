import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button.component';

import './ErrorPage.styles.scss';

const ErrorPage = (props) => {
  return (
    <div>
      <h1 className='error-h1'>
        Oops. This page doesn't exist.
        <Link to='/' className='btn'>
          <Button>back to home</Button>
        </Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
