import React from 'react';
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
}

const PaginationControls: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNavigateForward,
  onNavigueteBackward
}) => (
  <div className='pagination-container'>
    <FontAwesomeIcon
      icon={faChevronLeft}
      className='pagination-chevron'
      onClick={onNavigueteBackward}
    />
    <span className='pagination__number'>
      {currentPage}/{totalPages > 0 ? totalPages : 1}
    </span>
    <FontAwesomeIcon
      icon={faChevronRight}
      className='pagination-chevron'
      onClick={onNavigateForward}
    />
  </div>
);

export default PaginationControls;
