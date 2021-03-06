import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../SectionTitle/SectionTitle.component';
import Button from '../Button/Button.component';
import HomeProjectItem from '../HomeProjectItems/HomeProjectItems.component';
import GoToTop from '../GoToTop';

import './HomeProjects.styles.scss';

function HomeProject() {
  return (
    <Fragment>
      <div className='projects'>
        <SectionTitle>project</SectionTitle>

        <div className='projects-container'>
          <p>These are some of my projects.</p>

          <br />
          <HomeProjectItem />
          <div className='center'>
            <Link to='/portfolio'>
              <Button>More</Button>
            </Link>
          </div>
        </div>
      </div>
      <GoToTop />
    </Fragment>
  );
}

export default HomeProject;
