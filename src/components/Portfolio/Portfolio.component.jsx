import React, { Fragment } from 'react';
import ProjectItems from '../ProjectItems/ProjectItems.component';
import GoToTop from '../GoToTop';

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
