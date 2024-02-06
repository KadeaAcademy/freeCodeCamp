// import { Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
// import { Spacer } from '../../helpers';
import './what-can-you-do.css';

function WhatCanYouDo(): JSX.Element {
  return (
    <div className='landing-top'>
      <div>
        <h2 className='big-heading title-color text-center'>{`Que pourras-tu faire ?`}</h2>
        <br />
      </div>
      <div className=''>
        <div className='card-container'>
          <div className='card-unit-col-4'>
            <div className='card-py-5'>
              <div className='card-item'>
                <h4 className='card-index'>{`01`}</h4>
              </div>
              <hr className='card-hr' />
              <div className='card-item'>
                <h4 className='fw-bold'>
                  <span className='text-love-light'>{`Acquérir`}</span>
                  <br />
                  {`une compétence.`}
                </h4>
              </div>
              <div className='card-item  flexible'>
                <p className='text-responsive'>
                  {`
                Concentre-toi sur ce qui est nécessaire 
                pour acquérir une compétence spécifique et applicable.
                `}
                </p>
              </div>
            </div>
          </div>

          <div className='card-unit-col-4'>
            <div className='card-py-5'>
              <div className='card-item'>
                <h4 className='card-index'>{`02`}</h4>
              </div>
              <hr className='card-hr' />
              <div className='card-item'>
                <h4 className='fw-bold'>
                  <span className='text-love-light'>{`Rejoindre`}</span>
                  <br />
                  {`
                  la meilleure 
                  école de code en RDC.
                  `}
                </h4>
              </div>
              <div className='card-item  flexible'>
                <p className='text-responsive'>
                  {`
                Trouve le bon cours, et lance-toi. 
                Trouve le bon cours, et pratique.
                `}
                </p>
              </div>
            </div>
          </div>

          <div className='card-unit-col-4'>
            <div className='card-py-5'>
              <div className='card-item'>
                <h4 className='card-index'>{`03`}</h4>
              </div>
              <hr className='card-hr' />
              <div className='card-item'>
                <h4 className='fw-bold'>
                  <span className='text-love-light'>{`Construire`}</span>
                  <br />
                  {`une carrière.`}
                </h4>
              </div>
              <div className='card-item  flexible'>
                <p className='text-responsive'>
                  {`
                Nos offres sont complètes. 
                Avec tout ce dont tu as besoin 
                pour construire ta carrière.
                `}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WhatCanYouDo.displayName = 'WhatCanYouDo';
export default WhatCanYouDo;
