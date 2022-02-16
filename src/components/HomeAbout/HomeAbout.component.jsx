import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle.component';
import GoToTop from '../GoToTop';

import Button from '../Button/Button.component';

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';
import typescript from '../../assets/Typescript.png';
import sass from '../../assets/sass.png';

import './HomeAbout.styles.scss';
import './skills.styles.scss';

import memoji from '../../assets/memoji.png';

const HomeAbout = () => (
  <Fragment>
    <div className='about'>
      <SectionTitle>about</SectionTitle>
      <div className='about_container'>
        <h1>
          Hello, I'm Stella!&nbsp;
          <img src={memoji} className='Memoji' />
        </h1>
        <p>
          Currently looking for a new client & full-time job opportunity. Click
          to learn more about me. &nbsp;
          <Link to='/about'>
            <Button>Click</Button>
          </Link>
        </p>
      </div>
    </div>

    <div className='skills'>
      <SectionTitle>skills</SectionTitle>
      <div className='skills_container'>
        <ul>
          <li>
            <FaReact color='#1cc5dc' />
            <p>React</p>
          </li>
          <li>
            <FaNodeJs color='#4aa96c' />
            <p>Node.js</p>
          </li>
          <li>
            <img src={typescript} className='typescript' />
            <p>TypeScript</p>
          </li>
          <li>
            <FaJs color='#fdca40' />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={sass} className='sass' />
            <p>Sass</p>
          </li>
          <li>
            <FaBootstrap color='#542e71' />
            <p>Bootstrap</p>
          </li>
          <li>
            <FaCss3Alt color='#2978b5' />
            <p>CSS3</p>
          </li>
          <li>
            <FaHtml5 color='#ff5200' />
            <p>HTML5</p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    <GoToTop />
  </Fragment>
);

export default HomeAbout;
