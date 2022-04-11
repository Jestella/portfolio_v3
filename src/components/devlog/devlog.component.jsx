import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop';

import Button from '../Button/Button.component';

import './Devlog.styles.scss';

function Devlog() {
  const logs = [
    {
      id: 1,
      month: 'March',
      title: 'Next.js',
      subtitle: 'Built a restaurant website with Next.js',
      linkUrl: 'https://bistrolee-jestella.vercel.app/',
      link: 'Live Demo',
    },
    {
      id: 2,
      month: 'February',
      title: 'Next.js',
      subtitle:
        'Learned Next.js from scratch and created my first Next.js application with Next.js tutorial',
      linkUrl: 'https://github.com/Jestella/nextjs-blog',
      link: 'Github Repository',
    },
    {
      id: 3,
      month: 'January',
      title: 'Data Structures & Algorithms',
      subtitle:
        'Completed the Udemy course <Master the Coding Interview: Data Strucrues + Algorithms>',
      linkUrl:
        'https://www.udemy.com/certificate/UC-61c4a8ac-bf1c-4d72-b634-2e002328994c/',
      link: 'Certificate of Completion',
    },
  ];

  return (
    <Fragment>
      <div className='devlog'>
        <div className='devlog-container'>
          <h2 className='center'>2022</h2>
          {logs.map(({ month, title, subtitle, linkUrl, link }, index) => (
            <div className='devlog-box'>
              <div className='devlog-textbox'>
                <span className='month'>{month}</span>
                <h3 className='devlog-box-title'>{title}</h3>
                <p className='devlog-box-subtitle'>{subtitle}</p>

                <div className='devlog-read'>
                  <span className='related-link'>
                    + Related Link:{' '}
                    <a href={linkUrl} target='_blank'>
                      {link}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className='center'>
            <Link to='/' className='btn'>
              <Button>Home</Button>
            </Link>
          </div>
        </div>
      </div>
      <GoToTop />
    </Fragment>
  );
}

export default Devlog;
