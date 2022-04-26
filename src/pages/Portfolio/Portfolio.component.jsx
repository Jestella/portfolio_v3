import React, { Fragment } from 'react';
import ProjectItems from '../../components/ProjectItems/ProjectItems.component';
import GoToTop from '../../components/GoToTop';

import './Portfolio.styles.scss';

const Portfolio = () => {
  return (
    <Fragment>
      <div className='portfolio-page'>
        <ProjectItems />
      </div>
      <GoToTop />
    </Fragment>
  );
};

export default Portfolio;
