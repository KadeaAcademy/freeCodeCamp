import React, { useEffect, useState } from 'react';

import PlayIcon from '../../assets/images/play.svg';
import clockIcon from '../../assets/icons/clock.svg';
import levelIcon from '../../assets/icons/level.svg';

import Map from '../Map/index';
import { Link } from '../helpers';

import './course-card.css';
import { updateEnrollment } from '../../utils/ajax';
import { updateProgrammationEnrolement } from '../../utils/update-enrolement-programation-course';

// const { apiLocation } = envData;

enum CardStyle {
  Path = 'parcours',
  Courses = 'cours'
}

interface LandingDetailsProps {
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
  duration?: string;
  language?: string;
  level?: string;
}

const CourseCard = ({
  isAvailable,
  sameTab,
  external,
  description,
  duration,
  title,
  icon,
  sponsorIcon,
  alt,
  buttonText,
  link,
  cardType,
  badgeIcon,
  createAt,
  language,
  level
}: LandingDetailsProps): JSX.Element => {
  const [courseLink, setCourseLink] = useState<string | null>('');

  const isLessThan30DaysOld = (date: string): boolean => {
    const dateObjet = new Date(date);
    const dateDuJour = new Date();
    const differenceEnMillisecondes =
      dateDuJour.getTime() - dateObjet.getTime();
    const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);
    return differenceEnJours <= 30;
  };

  const handleClick = () => {
    if (link) {
      setCourseLink(link);
    }
  };

  useEffect(() => {
    if (courseLink) {
      if (courseLink.includes('cloud.contentraven.com/awspartners')) {
        void updateEnrollment(courseLink);
      }
      if (courseLink.includes('/learn/')) {
        console.log('courseLink', courseLink);

        void updateProgrammationEnrolement(courseLink);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseLink]);
  return (
    <div className='card-course-detail-back standard-radius-5 card-outlin-border'>
      <div className='card-course-detail-unit position-relative'>
        <Link to={link ? link : ''} className='link' onClick={handleClick}>
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
                  className='fw-bold text-love-light text-love-light__mobile'
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
              <div className='level__duration'>
                <div className='level-card-course'>
                  {level ? (
                    <>
                      <img
                        src={levelIcon}
                        alt='icone clock duration'
                        className='clock'
                      />
                      <p> {level === 'debutant' ? 'Débutant' : level}</p>
                    </>
                  ) : (
                    ''
                  )}
                </div>
                <div className='duration__language'>
                  {duration ? (
                    <div className='align'>
                      <img
                        src={clockIcon}
                        alt='icone clock duration'
                        className='clock'
                      />
                      <p className='clock__time'>{duration} </p>
                    </div>
                  ) : (
                    ''
                  )}
                  <div>
                    {language ? (
                      <>
                        <p className='course__language'>
                          {language === 'French' ? 'Français' : 'Anglais'}{' '}
                        </p>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>

              <div className='duration pull'></div>

              <div className='push'>
                {isAvailable ? (
                  <>
                    {link ? (
                      <Link
                        to={link}
                        sameTab={sameTab ? true : false}
                        external={external ? true : false}
                        state={{ description: description }}
                        className='link-course text-love-light fw-semi-bold text-responsive'
                        onClick={handleClick}
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
                      </>
                    )}
                  </>
                ) : (
                  <span className='push text-love-light fw-semi-bold text-responsive'>
                    Bientôt disponible
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

CourseCard.displayName = 'CourseCard';
export default CourseCard;
