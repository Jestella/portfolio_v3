import React from 'react';

import './SectionTitle.styles.scss';

function SectionTitle(props) {
  return (
    <div className='section_title_container'>
      <h2 className='section_title'>{props.children}</h2>
      {/* <hr className="underline" /> */}
    </div>
  );
}

export default SectionTitle;
