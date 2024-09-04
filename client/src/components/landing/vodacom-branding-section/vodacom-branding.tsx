import React from 'react';
import './vodacom-branding.css';
import VodacomLogo from '../../../assets/images/vodacom_logo.png';

function VodacomBranding() {
  return (
    <div className='vodacom'>
      <section className='vodacom__section'>
        <h2>Pas envie de dépenser tes mégas ? </h2>
        <div className='vodacom__marque'>
          <div className='vodacom-logo'>
            <img src={VodacomLogo} alt='vodacom logo' />
          </div>
          <span>Vodacom</span>
        </div>
        <p className='vodacom__section-p'>
          Grâce à son programme ConnectU, Vodacom offre à tous ses abonnés le
          privilège d’accéder gratuitement au conetnu de KADEA ONLINE sans
          forfait Internet.
        </p>
      </section>
    </div>
  );
}

export default VodacomBranding;
