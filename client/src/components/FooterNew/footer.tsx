import React from 'react';
import { Link } from '@reach/router';
import { VscTriangleRight } from 'react-icons/vsc';
import logo from '../../assets/icons/logo.png';
import { Image } from '../../../../tools/ui-components/src/image/image';

const linksSections = [
  {
    title: 'Formations',
    links: [
      { label: 'Bootcamp Carrière', link: 'https://www.kadea.academy/' },
      { label: 'Boost', link: 'https://www.kadea.academy/boost/' },
      { label: 'Online', link: 'https://online.kadea.co/' }
    ]
  },
  {
    title: 'Entreprises',
    links: [
      { label: 'Kadea Academy', link: 'https://kadea.academy/' },
      { label: 'Kadea Software', link: 'https://kadea.co/' }
    ]
  },
  {
    title: 'Communauté',
    links: [
      {
        label: 'State of Dev',
        link: 'https://stateofdev.kinshasadigital.academy/'
      }
    ]
  }
];

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className='bg-neutral-900 text-white py-12 mt-auto w-full'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Logo centrée */}
        <div className='flex flex-col items-center mb-10'>
          <Link to='/' className='mb-6'>
            <Image
              src={logo}
              alt='Logo Kadea'
              className='w-40 h-auto object-contain'
            />
          </Link>
        </div>

        {/*
            CHANGEMENT PRINCIPAL ICI :
            1. grid-cols-1 pour mobile
            2. On garde le texte centré globalement, mais on aligne les puces
        */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto'>
          {linksSections.map((section, id) => (
            // Conteneur de section : centré sur mobile, aligné début sur desktop (md:items-start)
            <div
              className='flex flex-col items-center md:items-start w-full'
              key={id}
            >
              <h4 className='text-xl font-bold mb-4 uppercase tracking-wider text-gray-100 text-center md:text-left'>
                {section.title}
              </h4>

              {/*
                 ASTUCE D'ALIGNEMENT :
                 - 'w-fit' : La boite prend juste la largeur du contenu (pas 100%).
                 - 'items-start' : Les liens s'alignent à gauche DANS cette boite.
                 - Comme le parent a 'items-center', cette boite 'w-fit' sera centrée sur l'écran,
                   mais les flèches rouges seront parfaitement alignées verticalement.
              */}
              <div className='flex flex-col gap-3 w-fit items-start md:w-full'>
                {section.links.map((link, i) => (
                  <a
                    href={link.link}
                    target='_blank'
                    rel='noreferrer'
                    className='group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 no-underline'
                    key={i}
                  >
                    <span className='text-[#e5203d] text-lg transform group-hover:translate-x-1 transition-transform duration-200 min-w-[20px]'>
                      <VscTriangleRight />
                    </span>
                    <span className='text-base font-medium text-left'>
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-gray-800 flex justify-center text-center'>
          <small className='text-gray-400 text-sm'>
            &copy; Kadea Online {date}. Tous droits réservés.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
