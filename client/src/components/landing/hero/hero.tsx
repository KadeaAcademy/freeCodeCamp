import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import envData from '../../../../../config/env.json';
import { Spacer } from '../../helpers';
import Map from '../../Map/index';
import LearnCode from '../../../assets/images/hero-img.png';
import './hero-style.css';

const { apiLocation } = envData;

interface HeroProps {
  pageName: string;
  isSignedIn?: boolean;
}
function Hero({ pageName, isSignedIn }: HeroProps): JSX.Element {
  return (
    <div className='landing-top pt-pb-5'>
      <Row className='d-flex-hero align-items-center'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <div className='landing-top-content'>
            <h1
              className='hero-heading text-light'
              data-test-label={`${pageName}-header`}
            >
              Apprends{' '}
              <strong className='text-love-light'>GRATUITEMENT EN LIGNE</strong>{' '}
              et augmente tes chances de rejoindre la{' '}
              <strong className='text-love-light'>MEILLEURE</strong> école de
              code.
            </h1>
            <p className='hero-text text-responsive text-light hero-description'>
              {`
            Concentre-toi sur ce qui est nécessaire 
            pour acquérir une compétence spécifique et applicable. 
            Tu seras mieux outillé pour construire une carrière.
            `}
            </p>
            <div>
              {isSignedIn ? (
                <Map
                  forLanding={true}
                  single={true}
                  className='section-btn'
                  text='Lance-toi'
                  keyPrefix='landing-top'
                />
              ) : (
                <a href={`${apiLocation}/signin`} className='section-btn'>
                  {'Lance-toi'}
                </a>
              )}
            </div>
            <Spacer />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 hide-img-on-mobile'>
          <div className=''>
            <img src={LearnCode} alt='LearnCode' className='img-fluid' />
          </div>
        </div>
        <Spacer />
      </Row>
      <Spacer />
    </div>
  );
}

Hero.displayName = 'Hero';
export default Hero;
