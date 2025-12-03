import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from '@freecodecamp/react-bootstrap';
import { YearFilterProps } from '../../redux/prop-types';

const YearFilter = ({
  filteredYear,
  onYearChange,
  startYear = 2022,
  numberOfYears = 4
}: YearFilterProps) => {
  return (
    <FormGroup className='mb-3'>
      <div className='flex items-center'>
        <svg
          className='filter-icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          width={80}
          height={80}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
          />
        </svg>
        <ControlLabel>Filtrer par année</ControlLabel>
      </div>
      <FormControl
        componentClass='select'
        value={filteredYear}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onYearChange(Number(e.target.value))
        }
        className='standard-radius-5'
      >
        {Array.from({ length: numberOfYears }, (_, i) => startYear + i).map(
          year => (
            <option key={year} value={year}>
              {year}
            </option>
          )
        )}
      </FormControl>
    </FormGroup>
  );
};

export default YearFilter;
