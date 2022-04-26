import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.component';
import SectionTitle from '../SectionTitle/SectionTitle.component';
import Devlog from '../../pages/Devlog/Devlog.component';
import GoToTop from '../GoToTop';

import './HomeLab.styles.scss';

export default function HomeLab() {
  let navigate = useNavigate();

  return (
    <Fragment>
      <div className='home-lab'>
        <SectionTitle>lab</SectionTitle>
        <div className='home-lab-container'>
          <h2>💡</h2>
          <p>Random Experiments.</p>
          <div className='center'>
            <button
              onClick={() => {
                navigate('/lab');
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
