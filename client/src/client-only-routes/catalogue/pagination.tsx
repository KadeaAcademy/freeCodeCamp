import React, { useEffect, useRef } from 'react';
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

// 1. Correction TS : On retire "React.FC" et on type directement les props
const PaginationControls = ({
  currentPage,
  totalPages,
  onNavigateForward,
  onNavigueteBackward,
  onNavigateToPage
}: PaginationProps) => {
  // 2. Référence pour cibler le bouton actif
  const activePageRef = useRef<HTMLSpanElement>(null);

  const maxVisiblePages = 10;
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

  // 3. useEffect avec délai pour gérer le chargement et le changement via flèches
  useEffect(() => {
    // On attend 100ms pour être sûr que le re-render est fini
    const timer = setTimeout(() => {
      if (activePageRef.current) {
        activePageRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className='pagination-container'>
      {currentPage > 1 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className='pagination-chevron'
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
            className='pagination__number'
            role='button'
            tabIndex={0}
            onClick={() => onNavigateToPage(1)}
            onKeyDown={e => e.key === 'Enter' && onNavigateToPage(1)}
            aria-label='Aller à la première page'
          >
            1
          </span>
          {startPage > 2 && <span className='pagination__dots'>...</span>}
        </>
      )}

      {pages.map(page => (
        <span
          key={page}
          // 4. IMPORTANT : On attache la ref ici
          ref={currentPage === page ? activePageRef : null}
          role='button'
          tabIndex={0}
          className={`pagination__number ${
            currentPage === page ? 'pagination__number--active' : ''
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
          {endPage < totalPages - 1 && (
            <span className='pagination__dots'>...</span>
          )}
          <span
            className='pagination__number'
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
          className='pagination-chevron'
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
