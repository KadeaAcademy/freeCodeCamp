import React from 'react';
import envData from '../../../../../config/env.json';
import Map from '../../Map/index';
import './style.css';
import Illustration from '../../../assets/images/start-coding-illustration-section.svg';

const { apiLocation } = envData;

type AsSeenInProps = {
  isSignedIn?: boolean;
};

function StartCOding({ isSignedIn }: AsSeenInProps): JSX.Element {
  return (
    <section className='start-coding-section'>
      <div className='start-coding-container'>
        <div className='start-coding-container__description'>
          <h3 className='text-light'>
            {`Prêt à donner un coup de fouet à ta carrière ?`}
          </h3>
          <br />
          <div className=''>
            {isSignedIn ? (
              <Map
                forLanding={true}
                single={true}
                className='start-coding-cta'
                text='Commence à apprendre'
                keyPrefix='as-seen-in-top'
              />
            ) : (
              <a href={`${apiLocation}/signin`} className='start-coding-cta'>
                {'Commence à apprendre'}
              </a>
            )}
          </div>
        </div>
        <img src={Illustration} alt='Start coding now!' />
      </div>
    </section>
  );
}

export default StartCOding;
