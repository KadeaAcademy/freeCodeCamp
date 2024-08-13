import React from 'react';
import envData from '../../../../config/env.json';
import PlayIcon from '../../assets/images/play.svg';

import Map from '../Map/index';
import { Link } from '../helpers';
import clockIcon from '../../assets/icons/clock.svg';
import levelIcon from '../../assets/icons/level.svg';

import './path-card.css';
import routes from '../../utils/routes';

const { apiLocation } = envData;

interface LandingDetailsProps {
  isSignedIn?: boolean;
  phone?: string;
  name?: string;
  isAvailable: boolean;
  sameTab?: boolean;
  external?: boolean;
  description?: string;
  title: string;
  icon?: string;
  sponsorIcon?: string;
  alt?: string;
  buttonText?: string;
  link?: string;
  cardType?: string;
  duration?: string;
  level?: string;
  language?: string | null;
}

const PathCard = ({
  isSignedIn,
  isAvailable,
  phone,
  name,
  sameTab,
  external,
  description,
  title,
  icon,
  sponsorIcon,
  alt,
  buttonText,
  link,
  duration,
  level,
  language
}: LandingDetailsProps): JSX.Element => {
  return (
    <div className='card-course-detail-back-path standard-radius-5 card-outlin-border'>
      <div className='card-course-detail-unit position-relative'>
        <Link to={link ? link : routes.learningPath.index}>
          <div className='card-outlin-border bg-light standard-radius-5'>
            <div className='bg-pretty-dark'>
              <div className='card-course-detail-item text-light fw-bold'>
                Parcours
              </div>
            </div>

            <div className='card-course-detail-header'>
              {sponsorIcon && (
                <div className='card-course-detail-logo-sponsor pull'>
                  <img src={sponsorIcon} alt='' className='img-fluid' />
                </div>
              )}
              <div className='card-course-detail-logo push'>
                <img src={icon} alt={alt} className='img-fluid' />
              </div>
            </div>
            <div className='card-course-detail-item'>
              <h4
                className='fw-bold text-love-light .text-love-light__mobile'
                dangerouslySetInnerHTML={{
                  __html: `${title.substring(0, 100)}`
                }}
              ></h4>
            </div>
            <div className='card-course-detail-item  flexible'>
              {description && (
                <p
                  className='text-responsive'
                  dangerouslySetInnerHTML={{
                    __html: `${description.substring(0, 130)}...`
                  }}
                ></p>
              )}
            </div>
            <div className='card-course-detail-footer'>
              <div className='course-level'>
                <div className='level-card'>
                  {level ? (
                    <>
                      <img
                        src={levelIcon}
                        alt='icone clock duration'
                        className='clock'
                      />
                      <p> {level}</p>
                    </>
                  ) : (
                    ''
                  )}
                </div>
                <div className='level-card'>
                  {duration ? (
                    <>
                      <img
                        src={clockIcon}
                        alt='icone clock duration'
                        className='clock'
                      />
                      <p className='clock__time'> {duration} </p>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className='duration pull'>
                <div className={language ? 'push__card' : 'footer__block'}>
                  {language ? (
                    <>
                      <p className='course__language'>
                        {' '}
                        {language === 'French' ? 'Français' : 'Anglais'}{' '}
                      </p>
                    </>
                  ) : (
                    ''
                  )}

                  {isAvailable ? (
                    name && phone ? (
                      isSignedIn ? (
                        <>
                          {link ? (
                            <Link
                              to={link}
                              sameTab={sameTab ? true : false}
                              external={external ? true : false}
                              state={{ description: description }}
                              className='link-course text-love-light fw-semi-bold text-responsive'
                            >
                              <div className='row-link'>
                                <div className='row-link-text'>
                                  {buttonText}
                                </div>
                                <div>
                                  <img
                                    src={PlayIcon}
                                    alt='Laptop icon'
                                    className='play'
                                  />
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <>
                              <Map
                                forLanding={true}
                                single={true}
                                className='link-course text-love-light fw-semi-bold text-responsive'
                                keyPrefix='landing-details'
                              >
                                <div className='row-link'>
                                  <div className='row-link-text'>
                                    {buttonText}
                                  </div>
                                  <div>
                                    <img
                                      src={PlayIcon}
                                      alt='Laptop icon'
                                      className='play'
                                    />
                                  </div>
                                </div>
                              </Map>
                              {/* <br />
                        <Link
                          to={`http://localhost:8001/`}
                          className='link-course text-love-light fw-semi-bold text-responsive'
                        >
                          Mooc
                        </Link> */}
                            </>
                          )}
                        </>
                      ) : (
                        <a
                          href={`${apiLocation}/signin`}
                          className='link-course text-love-light fw-semi-bold text-responsive'
                        >
                          <div className='row-link'>
                            <div className='row-link-text'>{buttonText}</div>
                            <div>
                              <img
                                src={PlayIcon}
                                alt='Laptop icon'
                                className='play'
                              />
                            </div>
                          </div>
                        </a>
                      )
                    ) : (
                      <a
                        href={`/settings?${link as string}`}
                        className='link-course text-love-light fw-semi-bold text-responsive'
                      >
                        <div className='row-link'>
                          <div className='row-link-text'>{buttonText}</div>
                          <div>
                            <img
                              src={PlayIcon}
                              alt='Laptop icon'
                              className='play'
                            />
                          </div>
                        </div>
                      </a>
                    )
                  ) : (
                    <span className='push text-love-light fw-semi-bold text-responsive'>
                      Bientôt disponible
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

PathCard.displayName = 'PathCard';
export default PathCard;
