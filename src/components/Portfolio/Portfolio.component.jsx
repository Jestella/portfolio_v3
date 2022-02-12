import React, { Fragment } from 'react';
import ProjectItems from '../ProjectItems/ProjectItems.component';

import './Portfolio.styles.scss';

const Portfolio = () => {
  return (
    <Fragment>
      <div className='portfolio-page'>
        <ProjectItems />
      </div>
    </Fragment>
  );
};

export default Portfolio;
