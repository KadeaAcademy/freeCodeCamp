import React, { useEffect, useRef } from 'react';
import './courses-category-card.css';
import devIcon from '../../assets/icons/dev-icon.svg';

const CoursesCategoryCard = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320; // Ajustez en fonction de la largeur de la carte et de l'écart

  useEffect(() => {
    const container = containerRef.current;

    const autoScroll = () => {
      if (container) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    };

    const intervalId = setInterval(autoScroll, 4000);

    return () => clearInterval(intervalId);
  }, [scrollAmount]);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <div className='main'>
      <div className='categories-wrapper'>
        <div className='chevron'>
          <button className='scroll-button left' onClick={scrollLeft}>
            ‹
          </button>
          <button className='scroll-button right' onClick={scrollRight}>
            ›
          </button>
        </div>

        <div className='categories-container' ref={containerRef}>
          <div className='category-card'>
            <span className='card-title'>Explorer tout</span>
            <div className='card-content'>
              <h2 className='category-name'>Programmation</h2>
              <img src={devIcon} className='img-icon' alt='icon' />
            </div>
          </div>
          <div className='category-card red-card'>
            <span className='card-title'>Explorer tout</span>
            <div className='card-content'>
              <h2 className='category-name'>Amazon Web Services</h2>
              <img src={devIcon} className='img-icon' alt='icon' />
            </div>
          </div>
          <div className='category-card'>
            <span className='card-title'>Explorer tout</span>
            <div className='card-content'>
              <h2 className='category-name'>Programmation</h2>
              <img src={devIcon} className='img-icon' alt='icon' />
            </div>
          </div>

          <div className='category-card'>
            <span className='card-title'>Explorer tout</span>
            <div className='card-content'>
              <h2 className='category-name'>Programmation</h2>
              <img src={devIcon} className='img-icon' alt='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CoursesCategoryCard.displayName = 'coursesCategoryCard';
export default CoursesCategoryCard;
