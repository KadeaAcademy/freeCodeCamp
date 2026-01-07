import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNavigateForward: () => void;
  onNavigueteBackward: () => void;
  onNavigateToPage: (page: number) => void;
}

const PaginationControls: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNavigateForward,
  onNavigueteBackward,
  onNavigateToPage
}) => {
  // État pour gérer le nombre de pages visibles selon la taille de l'écran
  const [maxVisiblePages, setMaxVisiblePages] = useState(5);

  // useEffect pour ajuster le nombre de pages visibles au redimensionnement
  useEffect(() => {
    const handleResize = () => {
      // Sur mobile (< 640px), on affiche 5 pages max, sinon 10
      if (window.innerWidth < 640) {
        setMaxVisiblePages(5);
      } else {
        setMaxVisiblePages(10);
      }
    };

    // Appel initial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const halfWindow = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfWindow);
  const endPage = Math.min(totalPages, currentPage + halfWindow);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  // Styles
  const baseNumberStyle =
    'px-3 py-1 mx-1 border rounded-md cursor-pointer transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-400';
  const activeStyle = 'bg-red-600 text-white border-red-600 hover:bg-red-700';
  const inactiveStyle =
    'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900';
  const dotsStyle = 'px-2 text-gray-500';
  const chevronStyle =
    'text-gray-500 hover:text-red-600 cursor-pointer mx-2 focus:outline-none focus:text-red-600 transition-colors p-2';

  return (
    // CORRECTION ICI :
    // 1. mb-12 : Ajoute une marge en bas pour ne pas toucher le footer
    // 2. flex-wrap : Permet aux chiffres de passer à la ligne sur très petits écrans
    // 3. gap-y-4 : Espacement vertical si ça passe à la ligne
    <div className='flex flex-wrap md:items-start md:justify-start items-center justify-center  mt-8 mb-16 gap-y-4 select-none w-full px-2'>
      {currentPage > 1 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={chevronStyle}
          onClick={() => onNavigueteBackward()}
          tabIndex={0}
          role='button'
          onKeyDown={e => e.key === 'Enter' && onNavigueteBackward()}
          aria-label='Page précédente'
        />
      )}

      {startPage > 1 && (
        <>
          <span
            className={`${baseNumberStyle} ${
              currentPage === 1 ? activeStyle : inactiveStyle
            }`}
            role='button'
            tabIndex={0}
            onClick={() => onNavigateToPage(1)}
            onKeyDown={e => e.key === 'Enter' && onNavigateToPage(1)}
            aria-label='Aller à la première page'
          >
            1
          </span>
          {startPage > 2 && <span className={dotsStyle}>...</span>}
        </>
      )}

      {pages.map(page => (
        <span
          key={page}
          role='button'
          tabIndex={0}
          className={`${baseNumberStyle} ${
            currentPage === page ? activeStyle : inactiveStyle
          }`}
          onClick={() => onNavigateToPage(page)}
          onKeyDown={e => e.key === 'Enter' && onNavigateToPage(page)}
          aria-label={`Aller à la page ${page}`}
        >
          {page}
        </span>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className={dotsStyle}>...</span>}
          <span
            className={`${baseNumberStyle} ${
              currentPage === totalPages ? activeStyle : inactiveStyle
            }`}
            role='button'
            tabIndex={0}
            onClick={() => onNavigateToPage(totalPages)}
            onKeyDown={e => e.key === 'Enter' && onNavigateToPage(totalPages)}
            aria-label={`Aller à la dernière page (${totalPages})`}
          >
            {totalPages}
          </span>
        </>
      )}

      {currentPage < totalPages && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className={chevronStyle}
          onClick={() => onNavigateForward()}
          tabIndex={0}
          role='button'
          onKeyDown={e => e.key === 'Enter' && onNavigateForward()}
          aria-label='Page suivante'
        />
      )}
    </div>
  );
};

export default PaginationControls;
