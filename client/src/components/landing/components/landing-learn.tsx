// import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
// import { Spacer } from '../../helpers';
import HtmlCode from '../../../assets/images/bi-bar-chart.png';
import CssCode from '../../../assets/images/bx-code-block.png';
import './card.css';

function LandingLearn(): JSX.Element {
  return (
    <div className='landing-top'>
      <div>
        <h2 className='big-heading'>{`Comment vas-tu apprendre ?`}</h2>
        <br />
      </div>
      <div className=''>
        <div className='card-container'>
          <div className='card-unit-col-6'>
            <div className='card-outlin-border card-py-5'>
              <div className='card-learn-logo'>
                <img src={HtmlCode} alt='LearnCode' className='img-fluid' />
              </div>
              <div className='card-item'>
                <h4 className='fw-bold text-center'>{`Étape par étape`}</h4>
              </div>
              <div className='card-item  flexible'>
                <p className='text-responsive text-center'>
                  {`
                Suis notre parcours étape par étape 
                et développe tes compétences.
                `}
                </p>
              </div>
            </div>
          </div>

          <div className='card-unit-col-6'>
            <div className='card-outlin-border card-py-5'>
              <div className='card-learn-logo'>
                <img src={CssCode} alt='LearnCode' className='img-fluid' />
              </div>
              <div className='card-item flexible'>
                <h4 className='fw-bold text-center'>{`Interactif`}</h4>
              </div>
              <div className='card-item  flexible'>
                <p className='text-responsive text-center'>
                  {`
                Apprends et interagis directement 
                sur notre éditeur de code en ligne.
                `}
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LandingLearn.displayName = 'LandingLearn';
export default LandingLearn;
