import React, { useEffect, useState } from 'react';

import PlayIcon from '../../assets/images/play.svg';
import clockIcon from '../../assets/icons/clock.svg';
import levelIcon from '../../assets/icons/level.svg';

import Map from '../Map/index';
import { Link } from '../helpers';

// L'import du fichier CSS a été supprimé car tout est maintenant en Tailwind
// import './course-card.css';

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
    // .card-course-detail-back
    <div className='w-[95%] md:w-[46%] xl:w-[31%] mb-[5%] h-auto  flex flex-col items-stretch justify-between rounded-[5px] hover:border border-[#2b292b] '>
      {/* .card-course-detail-unit .position-relative */}
      <div className='relative -top-[15px] -left-[15px] m-0 p-0 min-h-max flex flex-row w-full h-full'>
        <Link
          to={link ? link : ''}
          className='no-underline block w-full'
          onClick={handleClick}
        >
          {/* .card-outlin-border .bg-light .standard-radius-5 */}
          {/* Hauteur responsive adaptée aux media queries CSS: Mobile ~33rem/29rem, puis auto sur desktop */}
          <div className='border border-[#2b292b] w-full flex flex-col items-stretch justify-between bg-light rounded-[5px] h-[33rem] sm:h-[29rem] md:h-auto'>
            {cardType && cardType == CardStyle.Path ? (
              <div className='bg-pretty-dark'>
                {/* .card-course-detail-item */}
                <div className='flex items-stretch p-[1%] text-light fw-bold'>
                  Parcours
                </div>
              </div>
            ) : (
              <div className='bg-love-light'>
                {/* .card-course-detail-item */}
                <div className='flex items-stretch p-[1%] text-light fw-bold'>
                  Cours
                </div>
              </div>
            )}

            {/* .card-course-detail-header */}
            <div className='h-auto overflow-hidden flex'>
              {sponsorIcon && (
                // .card-course-detail-logo-sponsor
                <div className='w-[40%] p-[5%]'>
                  <img
                    src={sponsorIcon}
                    alt=''
                    className='img-fluid w-1/4 block'
                  />
                </div>
              )}
              {/* .card-course-detail-logo .push (le .push ici a float:right implicite dans le CSS original via flex order ou justif, mais .card-course-detail-logo a justify-start) */}
              <div className='w-[80%] p-[5%] flex justify-start'>
                <img src={icon} alt={alt} className='img-fluid w-1/4 block' />
              </div>
            </div>

            {/* .card-course-detail-item */}
            <div className='flex items-stretch p-[1%] leading-normal'>
              {/* .card-title */}
              <div className='flex items-center h-auto p-2 sm:mt-0 mt-[10%]'>
                <h4
                  className='fw-bold text-love-light text-love-light__mobile'
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h4>{' '}
                {isLessThan30DaysOld(createAt as string) && (
                  // .img-badge
                  <img
                    src={badgeIcon}
                    alt=''
                    className='h-auto w-[64px] pb-[1.8rem] pl-[0.5rem] block'
                  />
                )}
              </div>
            </div>

            {/* .card-course-detail-item .flexible */}
            <div className='flex items-stretch p-2 flex-grow h-[20%] leading-normal'>
              {description && (
                <p
                  className='text-responsive m-0'
                  dangerouslySetInnerHTML={{
                    __html: `${description.substring(0, 150)}...`
                  }}
                ></p>
              )}
            </div>

            {/* .card-course-detail-footer */}
            <div className='px-0 sm:px-[5%] overflow-hidden'>
              {/* .level__duration */}
              <div className='flex flex-col'>
                {/* .level-card-course */}
                <div className='flex flex-row items-start gap-[0.3rem] pt-[3%]'>
                  {level ? (
                    <>
                      <img
                        src={levelIcon}
                        alt='icone clock duration'
                        className='w-[10%] m-[0.1rem] block'
                      />
                      <p className='m-0'>
                        {' '}
                        {level === 'debutant' ? 'Débutant' : level}
                      </p>
                    </>
                  ) : (
                    ''
                  )}
                </div>
                {/* .duration__language */}
                <div className='flex flex-col px-[0.3rem]'>
                  {duration ? (
                    // .align
                    <div className='flex items-start'>
                      <img
                        src={clockIcon}
                        alt='icone clock duration'
                        className='w-[10%] m-[0.1rem] block'
                      />
                      {/* .clock__time */}
                      <p className='text-center ml-[0.2rem] m-0'>{duration} </p>
                    </div>
                  ) : (
                    ''
                  )}
                  <div>
                    {language ? (
                      <>
                        {/* .course__language */}
                        <p className='sm:pl-0 pl-[0.8rem] m-0'>
                          {language === 'French' ? 'Français' : 'Anglais'}{' '}
                        </p>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>

              <div className='duration pull flex gap-2 p-2 items-start'></div>

              {/* .push */}
              {/* La classe .push avait beaucoup de media queries complexes pour la largeur et l'affichage (flex vs block) */}
              <div className='gap-2 flex items-baseline justify-end w-[12rem] xs:w-[15rem] sm:w-[17rem] md:block md:w-[17rem] lg:w-[16rem] xl:w-full xl:flex'>
                {isAvailable ? (
                  <>
                    {link ? (
                      <Link
                        to={link}
                        sameTab={sameTab ? true : false}
                        external={external ? true : false}
                        state={{ description: description }}
                        className='text-love-light fw-semi-bold text-responsive hover:text-[var(--love-light)]'
                        onClick={handleClick}
                      >
                        {/* .row-link */}
                        <div className='flex flex-row items-center gap-2 p-2 w-[11rem] justify-end sm:w-auto sm:justify-start'>
                          <div className='row-link-text'>{buttonText}</div>
                          <div>
                            {/* .play */}
                            <img
                              src={PlayIcon}
                              alt='Laptop icon'
                              className='w-full block'
                            />
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <Map
                          forLanding={true}
                          single={true}
                          className='text-love-light fw-semi-bold text-responsive hover:text-[var(--love-light)]'
                          keyPrefix='landing-details'
                        >
                          <div className='flex flex-row items-center gap-2 p-2 w-[11rem] justify-end sm:w-auto sm:justify-start'>
                            <div className='row-link-text'>{buttonText}</div>
                            <div>
                              <img
                                src={PlayIcon}
                                alt='Laptop icon'
                                className='w-full block'
                              />
                            </div>
                          </div>
                        </Map>
                      </>
                    )}
                  </>
                ) : (
                  <span className='text-love-light fw-semi-bold text-responsive'>
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
