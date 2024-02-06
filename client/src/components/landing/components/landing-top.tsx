import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import envData from '../../../../../config/env.json';
import { Spacer } from '../../helpers';
import Map from '../../Map/index';
import LearnCode from '../../../assets/images/learn-code.png';

const { apiLocation } = envData;

interface LandingTopProps {
  pageName: string;
  isSignedIn?: boolean;
}
function LandingTop({ pageName, isSignedIn }: LandingTopProps): JSX.Element {
  return (
    <div className='landing-top landing-top-pt-pb'>
      <Row className='d-flex-hero align-items-center'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <div className='landing-top-content'>
            <h1 className='hero-heading' data-test-label={`${pageName}-header`}>
              Apprends à <span className='text-love-light'>coder</span> et
              maximise tes chances {`d'être`} admis dans la{' '}
              <span className='text-love-light'>meilleure</span> école de
              codage.
            </h1>
            <p className='hero-text text-responsive'>
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
                  className='btn-primary link-button'
                  text='Lance-toi'
                  keyPrefix='landing-top'
                />
              ) : (
                <a
                  href={`${apiLocation}/signin`}
                  className='btn-primary link-button'
                >
                  {'Lance-toi'}
                </a>
              )}
            </div>
            <Spacer />
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
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

LandingTop.displayName = 'LandingTop';
export default LandingTop;
