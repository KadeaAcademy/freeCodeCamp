import React, { useState } from 'react';
import './course-filter.css';

import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  checkedBox,
  valueOfCurrentCategory,
  valueOfTypeDuration
} from '../../redux/atoms';

const FilterByDuration = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSubjectFilter, setShowSubjectFilter] = useState(true);
  const setValueDuration = useSetRecoilState(valueOfTypeDuration);
  const setValueChecked = useSetRecoilState(checkedBox);
  const [currentCategorieValue, setValue0fCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const value = isChecked ? e.target.value : 'none'; // Assigner "none" lorsqu'il est décoché

    setValueDuration(value);
    setValueChecked(isChecked);
    setValue0fCurrentCategory(currentCategorieValue);
    setShowFilter(showFilter);
  };

  return (
    <div className='filter-container'>
      <div className='main-title-filter-container'>
        <svg
          onClick={() => {
            setShowFilter(e => !e);
          }}
          width='30px'
          height='30px'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
        </svg>
      </div>
      <details className='filter__contenaire' open>
        <summary
          onClick={() => setShowSubjectFilter(e => !e)}
          className='filter-title-container'
        >
          <p className='filter-title'>Durée</p>
          {showSubjectFilter ? (
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='24' height='24' fill='white' />
              <path d='M7 14.5L12 9.5L17 14.5' stroke='#000000' />
            </svg>
          ) : (
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='24' height='24' fill='white' />
              <path d='M17 9.5L12 14.5L7 9.5' stroke='#000000' />
            </svg>
          )}
        </summary>
        <ul className='filter-items-container'>
          <div className='language-filter'>
            <label className='language__Label'>
              <input
                type='checkbox'
                value='>1h'
                onChange={handleLanguageChange}
              />
              Moins d&apos;1 heure
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value='1>5h'
                onChange={handleLanguageChange}
              />
              1 à 5 heures
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value='>5h'
                onChange={handleLanguageChange}
              />
              5+ heures
            </label>
          </div>
        </ul>
      </details>
    </div>
  );
};

FilterByDuration.displayName = 'FilterByDuration';
export default FilterByDuration;
