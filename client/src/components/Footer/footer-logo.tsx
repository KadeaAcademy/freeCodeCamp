import React from 'react';
import Logo from '../../assets/icons/kda-learning-plateform-chroma.png';

const FooterLogo = (): JSX.Element => {
  const kdaLogo: string = Logo as never;
  return (
    <div className='logo'>
      <img src={kdaLogo} alt='Logo' />
    </div>
  );
};

FooterLogo.displayName = 'FooterLogo';
export default FooterLogo;
