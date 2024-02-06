import React from 'react';
import Link from '../helpers/link';
import { Spacer } from '../helpers';
import Facebook from '../../assets/icons/facebook-square-brands-light.svg';
import Twitter from '../../assets/icons/twitter-square-brands-light.svg';
import Linkedin from '../../assets/icons/linkedin-brands-light.svg';
import Instagram from '../../assets/icons/instagram-square-brands-light.svg';
import FooterLogo from './footer-logo';
import './footer.css';

function Footer(): JSX.Element {
  return (
    <footer className='bg-dark-gray'>
      <div className='footer-container'>
        <Spacer />
        <div className='row d-flex justify-content-center'>
          <div className='col-lg-2 col-md-3 col-sm-3 col-xs-6 d-flex justify-content-center'>
            <Link className='link-logo' to='/'>
              <FooterLogo />
            </Link>
          </div>
        </div>
        <Spacer />
        <div className='row text-center'>
          <div className='col-12'>
            <p>
              <span className='fw-bold text-light'>Texaf Digital Campus</span>
              <br />
              <span className='fw-semi-bold text-light'>
                Concession COTEX N° 63 Avenue Colonel Mondjiba
              </span>
              <br />
              <span className='fw-semi-bold text-light'>
                Commune de Ngaliema - Kinshasa
              </span>
              <br />
            </p>
          </div>
        </div>
        <div className='row text-center d-flex justify-content-center'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center'>
            <div className='footer-icon'>
              <a
                href='https://www.facebook.com/kda243'
                target='_blank'
                rel='noreferrer'
                className='link-icon'
              >
                <img src={Facebook} alt='facebook' />
              </a>
            </div>
            <div className='footer-icon'>
              <a
                href='https://www.linkedin.com/company/kda243'
                target='_blank'
                rel='noreferrer'
                className='link-icon'
              >
                <img src={Linkedin} alt='Linkedin' />
              </a>
            </div>
            <div className='footer-icon'>
              <a
                href='https://www.twitter.com/kda243'
                target='_blank'
                rel='noreferrer'
                className='link-icon'
              >
                <img src={Twitter} alt='Twitter' />
              </a>
            </div>
            <div className='footer-icon'>
              <a
                href='https://www.instagram.com/kinshasadigitalacademy/'
                target='_blank'
                rel='noreferrer'
                className='link-icon'
              >
                <img src={Instagram} alt='Instagram' />
              </a>
            </div>
          </div>
        </div>
        <Spacer />
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;
