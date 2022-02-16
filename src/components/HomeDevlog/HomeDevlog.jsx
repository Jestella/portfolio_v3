import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.component';
import SectionTitle from '../SectionTitle/SectionTitle.component';
import Devlog from '../Devlog/Devlog.component';
import GoToTop from '../GoToTop';

import './HomeDevlog.styles.scss';

export default function HomeDevlog() {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className='home-devlog'>
        <SectionTitle>devlog</SectionTitle>
        <div className='home-devlog-container'>
          <h2>💻</h2>
          <p>What I learned & built this month.</p>
          <div className='center'>
            <button
              onClick={() => {
                navigate('/devlog');
              }}
              className='dev-btn'
            >
              More
            </button>
          </div>
        </div>
      </div>
      <GoToTop />
    </Fragment>
  );
}
