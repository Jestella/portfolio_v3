import React from 'react';

import './Button.styles.scss';

function Button(props) {
  return <button className='button'>{props.children}</button>;
  // return <button>{title ? title : 'Default Title'}</button>
}

export default Button;
