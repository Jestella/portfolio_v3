import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop';
import Button from '../Button/Button.component';

import './Lab.styles.scss';

function Lab() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <Fragment>
      <div className='lab'>
        <div className='lab-container'>
          <h1>Coming Soon...💡</h1>
          <Link to='/' className='btn'>
            <button className='dev-btn'>go back</button>
          </Link>

          {/* <div>
            <button onClick={handleClick}>{likes} Likes</button>
          </div> */}
        </div>
      </div>
      <GoToTop />
    </Fragment>
  );
}

export default Lab;
