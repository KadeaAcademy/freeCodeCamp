import React from 'react';

type CardProps = {
  cardtitle?: string;
  cardDescription?: string;
  cardIcon?: string;
};

const Card = ({ cardtitle, cardDescription, cardIcon }: CardProps) => {
  return (
    <div className={`learn-card-item`}>
      <div className='learn-card-text-part'>
        <h4 className='fw-bold text-light'>{cardtitle}</h4>
        <div className='learn-description-of-card text-responsive'>
          {cardDescription}
        </div>
      </div>
      <div className='learn-picture-part'>
        <img
          className='learn-picture'
          src={cardIcon}
          alt={cardtitle ? cardtitle : ''}
        />
      </div>
    </div>
  );
};
export default Card;
