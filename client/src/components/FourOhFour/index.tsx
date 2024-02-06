import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';

// import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
// import { randomQuote } from '../../utils/get-words';
import { Spacer } from '../helpers';

import './404.css';

const FourOhFour = (): JSX.Element => {
  // const { t } = useTranslation();
  // TODO: Remove this type coercion when get-words.js is migrated
  // const quote = randomQuote() as { quote: string; author: string };
  return (
    <div className='notfound-page-wrapper'>
      <Helmet title={`La page n'a pas été trouvée | Kadea Online`} />
      {/* <img alt={t('404.not-found')} src={notFoundLogo} /> */}
      {/* <Spacer /> */}
      <p className='error-code'>
        4<span className='text-love-light'>0</span>4
      </p>
      <Spacer />
      {/* <h1>{t('404.page-not-found')}.</h1> */}
      <h1>{`La page n'a pas été trouvée`}.</h1>
      <Spacer />
      <div>
        <p>{`Nous n'avons pas trouvé ce que vous cherchiez.`}</p>
        {/* <Spacer /> */}
        {/* <blockquote className='quote-wrapper'>
          <p className='quote'>
            <span>&#8220;</span>
            {quote.quote}
          </p>
          <p className='author'>- {quote.author}</p>
        </blockquote> */}
      </div>
      <Spacer size={1} />
      <Link className='btn btn-cta standard-radius-20' to='/'>
        {/* {t('buttons.view-curriculum')} */}
        {`Retourner sur la page d'accueil`}
      </Link>
    </div>
  );
};

export default FourOhFour;
