import React from 'react';
import './vodacom-branding.css';
import VodacomLogo from '../../../assets/images/vodacom_logo.png';

function VodacomBranding() {
  return (
    <div className='vodacom-section'>
      <div className='container padding-bottom-0 vodacom-bg-img'>
        <div className='vodacom-content'>
          <div className='vodacom-logo'>
            <img src={VodacomLogo} alt='vodacom logo' />
          </div>
          <div className='text-light'>
            Programme en
            <br />
            partenariat avec
            <br />
            <span className='vodacom-typography'>vodacom</span>
            <div>
              <p>
                <strong className='text-light'>
                  Grâce à son programme ConnectU, Vodacom offre à tous ses
                  abonnés le privilège
                  <br />
                  d’accéder gratuitement au contenu de KADEA ONLINE sans forfait
                  internet.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VodacomBranding;
