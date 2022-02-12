import React, { Fragment } from 'react';
import Main from '../Main/Main.component';
import HomeAbout from '../HomeAbout/HomeAbout.component';
import HomeProjects from '../HomeProjects/HomeProjects.component';
import HomeDevlog from '../HomeDevlog/HomeDevlog';

import {
  FaCodeBranch,
  FaCode,
  FaWrench,
  FaCog,
  FaStarOfLife,
} from 'react-icons/fa';

import './Home.styles.scss';

function Home() {
  return (
    <Fragment>
      <div className='home'>
        <div className='image_container hue_shift'>
          <FaCodeBranch className='fa-code-branch responsive_icon' />
          <FaCog className='fa-cog responsive_icon' />
          <FaCode className='fa-code responsive_icon' />
          <FaWrench className='fa-wrench responsive_icon' />
          <FaStarOfLife className='fa-star responsive_icon' />
        </div>
        <Main />
      </div>
      <HomeAbout />
      <HomeProjects />
      <HomeDevlog />
    </Fragment>
  );
}

export default Home;
