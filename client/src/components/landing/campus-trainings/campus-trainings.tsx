import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';
import { Image } from '../../../../../tools/ui-components/src/image/image';
import campusImage from './../../../assets/images/landing/silikin.png';
import devImage from './../../../assets/images/landing/trainings/dev.png';
import smdImage from './../../../assets/images/landing/trainings/smd.png';
import internews from './../../../assets/images/landing/partners/internews.png';
import pullman from './../../../assets/images/landing/partners/pullman.png';
import rawbank from './../../../assets/images/landing/partners/rawbank.png';
import texaf from './../../../assets/images/landing/partners/texaf.png';
import './styles.css';
import envData from './../../../../../config/env.json';

const { apiLocation } = envData;

const partners = [rawbank, internews, texaf, pullman];

const trainings = [
  {
    name: 'Bootcamp Carrière',
    description: (
      <span className='training-description text-white'>
        Formation <span className='font-bold text-inherit'>longue</span> sur
        notre campus
      </span>
    ),
    link: 'https://www.kadea.academy/formations/dev-web'
  },
  {
    name: 'Boost',
    description: (
      <span className='training-description text-white'>
        Formation <span className='font-bold text-inherit'>courte</span> sur
        notre campus
      </span>
    ),
    link: 'https://www.kadea.academy/boost'
  },
  {
    name: 'Initiation',
    description: (
      <span className='training-description text-white'>
        Formation <span className='font-bold text-inherit'>gratuite</span> en
        ligne
      </span>
    ),
    link: `${apiLocation}/signin`
  }
];

const bootcampSpecifications = [
  '12 mois (960h)',
  'Sur le campus et hybride',
  'Un emploi à la clé'
];

const bootcampTrainings = [
  {
    name: 'Full Stack Développeur',
    description:
      "Deviens développeur web et apprends à concevoir et à programmer des applications web et mobile, de l'analyse du besoin à la mise en ligne, en passant par l'interface et la base de données",
    link: 'https://www.kadea.academy/formations/dev-web',
    image: devImage
  },
  {
    name: 'Spécialiste en Marketing Digital',
    description:
      'Deviens expert en marketing digital et apprends à maitriser tous les outils nécessaires de la stratégie digitale 360, les référencements & SEO jusqu’à la gestion des réseaux sociaux.',
    link: 'https://www.kadea.academy/formations/marketing-digital/',
    image: smdImage
  }
];

export default function LandingCampusTrainings() {
  return (
    <div className='w-full flex flex-col gap-md items-center'>
      <Image
        src={campusImage}
        alt='Silikin Campus image'
        className='w-full campus-image'
      />
      <div className='w-full flex flex-col items-center gap'>
        <h2 className='text-center m-0'>
          Tu recherches une formation sur notre Campus ?
        </h2>
        <p>On a la formation qu&apos;il te faut</p>
      </div>
      <div className='trainings w-full grid grid-cols-3 gap'>
        {trainings.map((training, i) => (
          <a
            rel='noreferrer'
            href={training.link}
            target='_blank'
            className='w-full relative justify-between training flex flex-col gap p-xs bg-primary rounded-md'
            key={i.valueOf()}
          >
            <span className='absolute training-arrow-white-link top-1 right-1'>
              <IoIosArrowRoundUp />
            </span>
            <div className='w-full flex items-start justify-between'>
              <h4 className='training-name text-white p-0 m-0'>
                {training.name}
              </h4>
            </div>
            {training.description}
          </a>
        ))}
      </div>
      <div className='rounded-md p-normal bootcamp-preview bg-blue w-full flex flex-col gap'>
        <div className='w-full p-normal rounded-md bootcamp-preview-hero bg-blue flex flex-col gap'>
          <div className='w-full flex flex-col gap bootcamp-preview-hero-content'>
            <h2 className='text-white'>Bootcamp Carrière</h2>
            <h4 className='text-white'>Formation professionnel</h4>
            <div className='w-full flex flex-col gap-xs'>
              {bootcampSpecifications.map((s, i) => (
                <div
                  className='w-full flex items-center gap-xs'
                  key={i.valueOf()}
                >
                  <span className='check-icon flex items-center justify-center'>
                    <BsCheck />
                  </span>
                  <small className='text-white'>{s}</small>
                </div>
              ))}
            </div>
            <a
              href='https://www.kadea.academy'
              target='_blank'
              rel='noreferrer'
              className='subscribe-link flex items-center gap'
            >
              <span>Rejoins notre académie</span>
              <span className='flex h-full items-center'>
                <FaAngleRight />
              </span>
            </a>
          </div>
          <div className='bootcamp-preview-hero-bg hide-bg-on-mobile'></div>
        </div>
        <div className='grid grid-cols-1 md-grid-cols-2 gap'>
          {bootcampTrainings.map((training, i) => (
            <div
              className='w-full flex bootcamp-training p-normal bg-white rounded-md'
              key={i.valueOf()}
            >
              <Image
                src={training.image}
                alt={`${training.name} image`}
                className='bootcamp-training-image rounded-md'
              />
              <div className='w-full bootcamp-training-description flex flex-col gap'>
                <div className='w-full flex items-center justify-between'>
                  <h3>{training.name}</h3>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={training.link}
                    className=''
                  >
                    <span className='training-arrow-link'>
                      <IoIosArrowRoundUp />
                    </span>
                  </a>
                </div>
                <p>{training.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='rounded-md p-normal bg-black w-full flex flex-col gap join-section'>
          <div className='join-section-bg hide-bg-on-mobile'></div>
          <div className='w-full flex flex-col gap join-section-content'>
            <h2>
              <span>100% des apprenants</span> qui ont terminé la formation
              Bootcamp Carrière <span>ont trouvé un emploi.</span>
            </h2>
            <a
              href='https://www.kadea.academy'
              target='_blank'
              rel='noreferrer'
              className='subscribe-link flex items-center gap'
            >
              <span>Rejoins notre académie</span>
              <span className='text-white flex h-full items-center'>
                <FaAngleRight />
              </span>
            </a>
            <div className='w-full flex items-center gap'>
              {partners.map((p, i) => (
                <Image
                  src={p}
                  key={i.valueOf()}
                  alt={`Partner logo`}
                  className='partner-logo'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
