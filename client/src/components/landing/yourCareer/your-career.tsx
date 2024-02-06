import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import envData from '../../../../../config/env.json';
import Map from '../../Map/index';
import './your-career.css';
import LearnCode from '../../../assets/images/codeur.svg';

const { apiLocation } = envData;

type YourCareerProps = {
  isSignedIn?: boolean;
};

const YourCareer = ({ isSignedIn }: YourCareerProps): JSX.Element => {
  return (
    <Row>
      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
        <div>
          <h2 className='hero-heading'>
            <span className='career-title'>
              {`Prêt à donner un coup de fouet à votre carrière ?`}
            </span>
          </h2>
          <br />
          <p className='text-registration'>
            {`
            Deviens Développeur.se ou Specialiste en 
            Marketing Digital en 6 mois ou 12 mois de formation certifiante 
            suivi de 3 à 6 mois de stage, et trouve un emploi dans 
            les meilleurs entreprises nationales et internationales.
            `}
          </p>
          <br />
          <div>
            {isSignedIn ? (
              <Map
                forLanding={true}
                single={true}
                className='btn-light link-button text-responsive'
                text='Commence à apprendre'
                keyPrefix='as-seen-in-top'
              />
            ) : (
              <a
                href={`${apiLocation}/signin`}
                className='btn-light link-button'
              >
                {'Commence à apprendre'}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
        <div className='career-img hide-on-mobile-career-img'>
          <img src={LearnCode} alt='LearnCode' className='img-fluid' />
        </div>
      </div>
    </Row>
  );
};

YourCareer.displayName = 'YourCareer';
export default YourCareer;
