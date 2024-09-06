// import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
// import envData from '../../../../../config/env.json';
// import { Spacer } from '../../helpers';
// import Map from '../../Map/index';
// import LearnCode from '../../../assets/images/hero-img.png';
import './hero-style.css';
import { FaAngleRight } from 'react-icons/fa';
import { navigate } from '@reach/router';

// const { apiLocation } = envData;

// interface HeroProps {
//   pageName: string;
//   isSignedIn?: boolean;
// }
function Hero(): JSX.Element {
  return (
    <div className='hero__main'>
      <div className='h-full'>
        <section className='flex h-full flex-col gap items-start justify-between'>
          <h1 className='hero__section__title'>
            Forme toi <strong className=''>Gratuitement</strong> En lingne
          </h1>
          <p className='hero__main__section-p'>
            Découvre les métiers du numérique avec nos formations gratuites.
          </p>
          <button
            className='flex hero-button items-center gap'
            onClick={() => void navigate('#trainings')}
            // onClick={() => void navigate('/catalogue')}
          >
            <span className='font-bold'>Choisis ta formation</span>
            <span className='flex h-full items-center'>
              <FaAngleRight />
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

Hero.displayName = 'Hero';
export default Hero;
