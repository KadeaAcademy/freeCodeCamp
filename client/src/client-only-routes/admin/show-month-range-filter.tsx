import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from '@freecodecamp/react-bootstrap';

interface DateRangeFilterProps {
  dateRange: number;
  onDateRangeChange: (range: number) => void;
}

const DateRangeFilter = ({
  dateRange,
  onDateRangeChange
}: DateRangeFilterProps) => {
  return (
    <FormGroup className='mb-3 flex flex-col'>
      <div className='flex items-center'>
        <svg
          className='filter-icon'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          width={100}
          height={100}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
        <ControlLabel class='colore-withe-text'>{`Plage d'inscriptions mensuelle`}</ControlLabel>
      </div>
      <FormControl
        componentClass='select'
        value={dateRange}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onDateRangeChange(Number(e.target.value))
        }
        className='standard-radius-5'
      >
        <option value={3}>3 mois</option>
        <option value={6}>6 mois</option>
        <option value={12}>12 mois</option>
        <option value={24}>24 mois</option>
      </FormControl>
    </FormGroup>
  );
};

export default DateRangeFilter;
