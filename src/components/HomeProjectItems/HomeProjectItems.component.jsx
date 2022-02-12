import React, { Fragment, useState } from 'react';

import { ProjectData } from '../ProjectItems/ProjectData';

import './HomeProjectItems.styles.scss';

function HomeProjectItem() {
  return (
    <Fragment>
      <div className='cards'>
        {ProjectData.map(({ imageUrl, projectName, technologies }, index) => (
          <Fragment>
            <div className='card' key={index}>
              <div className='card-img'>
                <img src={imageUrl}></img>
              </div>

              <div className='card-text'>
                <p className='card-project-name'>{projectName}</p>
                <p className='card-project-subname'>{technologies}</p>
                <br />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
}

export default HomeProjectItem;
