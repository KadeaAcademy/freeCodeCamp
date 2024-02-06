import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Link from '../../helpers/link';
import { Spacer } from '../../../components/helpers';
import './registration-to-academy.css';

const RegistrationToAcademy = (): JSX.Element => {
  return (
    <Row>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div>
          <h2 className='big-heading text-ligth'>
            {`Inscris-toi à KADEA ACADEMY,`}
            <br />
            {`une formation qui change une vie.`}
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
            <Link
              to='https://www.kinshasadigital.academy/inscription'
              external={true}
              sameTab={false}
              className='registration-academy-btn'
            >
              {'Rejoins notre académie'}
            </Link>
          </div>
        </div>
        <Spacer size={1} />
      </div>
    </Row>
  );
};

RegistrationToAcademy.displayName = 'RegistrationToAcademy';
export default RegistrationToAcademy;
