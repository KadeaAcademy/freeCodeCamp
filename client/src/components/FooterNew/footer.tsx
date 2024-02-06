import React from 'react';
import { Link } from '../../components/helpers';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Twitter from '../../assets/images/twitter.png';
// import Whatsapp from '../../assets/images/whatsapp.png';
import Logo from '../../assets/images/logo/kadea-learn-ligth.svg';
import './style.css';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <div className='footer-container__left-side'>
          <Link className='link-logo text-center' to='/'>
            <img className='footer-logo' src={Logo} alt='Logo Kadea Online' />
          </Link>

          <div className='footer-container__left-side__social'>
            <ul className='footer-container__left-side__social-icons'>
              <li>
                <a
                  href='https://www.facebook.com/kda243'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  <img src={Facebook} alt='facebook' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/kinshasadigitalacademy/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={Instagram} alt='instagram' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitter.com/kda243'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={Twitter} alt='twitter' />
                </a>
              </li>
            </ul>
            <p className='footer-container__left-side__description'>
              Kadea Online © {date}
            </p>
          </div>
        </div>
        {/* <div className='footer-container__right-side'>
          <ul className='footer-container__right-side__menu'>
            <li>
              <p>Liens</p>
              <ul>
                <li>
                  <a href=''>A propos</a>
                </li>
                <li>
                  <a href=''>Cours</a>
                </li>
                <li>
                  <a href=''>Catalogue</a>
                </li>
                <li>
                  <a href=''>Coachs</a>
                </li>
                <li>
                  <a href=''>Connexion</a>
                </li>
              </ul>
            </li>

            <li>
              <p>Ressources</p>
              <ul>
                <li>
                  <a href=''>Programmation</a>
                </li>
                <li>
                  <a href=''>Javascript</a>
                </li>
                <li>
                  <a href=''>PHP</a>
                </li>
                <li>
                  <a href=''>Python</a>
                </li>
                <li>
                  <a href=''>Marketing</a>
                </li>
              </ul>
            </li>

            <li>
              <p>Support</p>
              <ul>
                <li>
                  <a href=''>Securité</a>
                </li>
                <li>
                  <a href=''>Politique de confidentialité</a>
                </li>
                <li>
                  <a href=''>Centre d'aide</a>
                </li>
                <li>
                  <a href=''>FAQ</a>
                </li>
                <li>
                  <a href='#'>Contacts</a>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default Footer;
