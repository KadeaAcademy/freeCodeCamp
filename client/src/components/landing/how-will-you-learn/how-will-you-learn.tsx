import React from 'react';
import BinaryCode from '../../../assets/images/BinaryCode.svg';
import CheckList from '../../../assets/images/CheckList.svg';
import Card from './card-learn';
import './how-will-you-learn.css';

const HowWillYouLearn = () => {
  return (
    <div className='learn-section'>
      <div className='container padding-bottom-0'>
        <div className='big-heading title-color text-center'>
          {`Comment vas-tu apprendre ?`}
        </div>
        <div>
          <p className='text-light text-center'>
            <strong className='text-light'>GRATUITEMENT</strong>,{' '}
            <strong className='text-light'>EN LIGNE</strong> et pas besoin de
            connection internet.
            <br />
            Grâce à vodacom accède à la plateforme sans devoir utiliser de data.
          </p>
        </div>
        <div className='learn-cards-section'>
          <Card
            cardtitle='Étape par étape'
            cardDescription='Suis notre parcours étape par étape 
                et développe tes compétences.'
            cardIcon={CheckList}
          />
          <Card
            cardtitle='Interactif'
            cardDescription='Apprends et interagis directement 
                sur notre éditeur de code en ligne.'
            cardIcon={BinaryCode}
          />
        </div>
        <div className='learn-round'>
          <svg
            width='83'
            height='26'
            viewBox='0 0 83 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M82.3814 41.5C82.3814 64.4115 63.9314 83 41.1907 83C18.45 83 0 64.4115 0 41.5C0 18.5885 18.45 0 41.1907 0C63.9314 0 82.3814 18.5885 82.3814 41.5Z'
              fill='#FF6462'
            />
          </svg>
          <svg
            width='83'
            height='26'
            viewBox='0 0 83 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M82.3814 41.5C82.3814 64.4115 63.9314 83 41.1907 83C18.45 83 0 64.4115 0 41.5C0 18.5885 18.45 0 41.1907 0C63.9314 0 82.3814 18.5885 82.3814 41.5Z'
              fill='#55BAD0'
            />
          </svg>
          <svg
            width='83'
            height='26'
            viewBox='0 0 83 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M82.3814 41.5C82.3814 64.4115 63.9314 83 41.1907 83C18.45 83 0 64.4115 0 41.5C0 18.5885 18.45 0 41.1907 0C63.9314 0 82.3814 18.5885 82.3814 41.5Z'
              fill='#A349A8'
            />
          </svg>
          <svg
            width='83'
            height='26'
            viewBox='0 0 83 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M82.3814 41.5C82.3814 64.4115 63.9314 83 41.1907 83C18.45 83 0 64.4115 0 41.5C0 18.5885 18.45 0 41.1907 0C63.9314 0 82.3814 18.5885 82.3814 41.5Z'
              fill='#F8D552'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HowWillYouLearn;
