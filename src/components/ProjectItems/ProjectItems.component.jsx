import React from 'react';
import Button from '../Button/Button.component';

import { ProjectData } from './ProjectData';

import './ProjectItems.styles.scss';

const ProjectItems = () => {
  return ProjectData.map((item) => {
    return (
      <div className='project_item'>
        <div key={item.id}>
          <h2 className='project_name'>{item.projectName}</h2>
          <div className='project_container'>
            <div className='project_image_container'>
              <img src={item.imageUrl} class='project_image'></img>
            </div>
            <div className='project_content_container'>
              <p className='project_technologies'>// {item.technologies}</p>
              <h3 className='project_subname'>{item.subName}</h3>
              <div class='project_btn'>
                <Button>
                  <a href={item.liveDemo} target='_blank'>
                    live demo
                  </a>
                </Button>
                <Button>
                  <a href={item.gitHub} target='_blank'>
                    github
                  </a>
                </Button>
              </div>
              <p>&#8226; {item.description1}</p>
              <p>&#8226; {item.description2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ProjectItems;
