import React from 'react';
import envData from '../../../../config/env.json';
import PlayIcon from '../../assets/images/play.svg';

import Map from '../Map/index';
import { Link } from '../helpers';

import './course-card.css';

const { apiLocation } = envData;

enum CardStyle {
  Path = 'parcours',
  Courses = 'cours'
}

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
  badgeIcon?: string;
  alt?: string;
  buttonText?: string;
  link?: string;
  cardType?: string;
  createAt?: Date | string | number;
}

const CourseCard = ({
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
  cardType,
  badgeIcon,
  createAt
}: LandingDetailsProps): JSX.Element => {
  const isLessThan30DaysOld = (date: string): boolean => {
    const dateObjet = new Date(date);
    const dateDuJour = new Date();
    const differenceEnMillisecondes =
      dateDuJour.getTime() - dateObjet.getTime();
    const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);
    return differenceEnJours <= 30;
  };
  return (
    <div className='card-course-detail-back standard-radius-5 card-outlin-border'>
      <div className='card-course-detail-unit position-relative'>
        <div className='card-outlin-border bg-light standard-radius-5'>
          {cardType && cardType == CardStyle.Path ? (
            <div className='bg-pretty-dark'>
              <div className='card-course-detail-item text-light fw-bold'>
                Parcours
              </div>
            </div>
          ) : (
            <div className='bg-love-light'>
              <div className='card-course-detail-item text-light fw-bold'>
                Cours
              </div>
            </div>
          )}

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
            <div className='card-title'>
              <h4
                className='fw-bold text-love-light'
                dangerouslySetInnerHTML={{ __html: title }}
              ></h4>{' '}
              {isLessThan30DaysOld(createAt as string) && (
                <img src={badgeIcon} alt='' className='img-badge' />
              )}
            </div>
          </div>
          <div className='card-course-detail-item  flexible'>
            {description && (
              <p
                className='text-responsive'
                dangerouslySetInnerHTML={{
                  __html: `${description.substring(0, 150)}...`
                }}
              ></p>
            )}
          </div>
          <div className='card-course-detail-footer'>
            <div className='push'>
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
                            <div className='row-link-text'>{buttonText}</div>
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
                              <div className='row-link-text'>{buttonText}</div>
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
    </div>
  );
};

CourseCard.displayName = 'CourseCard';
export default CourseCard;
