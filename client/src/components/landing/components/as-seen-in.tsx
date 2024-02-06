import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import envData from '../../../../../config/env.json';
import Map from '../../Map/index';

const { apiLocation } = envData;

type AsSeenInProps = {
  isSignedIn?: boolean;
};

const AsSeenIn = ({ isSignedIn }: AsSeenInProps): JSX.Element => {
  return (
    <Row className='as-seen-in'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className='text-center'>
          <h2 className='big-heading text-ligth'>{`Prêt à donner un coup de fouet à ta carrière ?`}</h2>
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
    </Row>
  );
};

AsSeenIn.displayName = 'AsSeenIn';
export default AsSeenIn;
