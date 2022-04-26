import React, { Fragment } from 'react';
import Main from '../../components/Main/Main.component';
import HomeAbout from '../../components/HomeAbout/HomeAbout.component';
import HomeProjects from '../../components/HomeProjects/HomeProjects.component';
import HomeDevlog from '../../components/HomeDevlog/HomeDevlog';
import HomeLab from '../../components/HomeLab/HomeLab';
import GoToTop from '../../components/GoToTop';

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
      <HomeLab />
      <GoToTop />
    </Fragment>
  );
}

export default Home;
