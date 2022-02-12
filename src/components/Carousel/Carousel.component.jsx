import React, { Fragment, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { CarouselData } from './CaroselData';

import './Carousel.styles.scss';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const moveDot = (index) => {
    setCurrent(index);
  };

  return (
    <Fragment>
      <div className='slider'>
        <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide} />
        <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide} />

        {CarouselData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div>
                  <img src={slide.image} className='slide-img' />
                  <p>{slide.title}</p>
                  <p>{slide.text}</p>
                  <p>{slide.skills}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Carousel;
