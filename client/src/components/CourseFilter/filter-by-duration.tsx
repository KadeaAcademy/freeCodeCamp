import React, { useEffect, useState } from 'react';
import './course-filter.css';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  categoryCounter,
  changeState,
  checkedBox,
  valueOfCurrentCategory,
  valueOfTypeDuration
} from '../../redux/atoms';
import { allQuery } from '../../utils/routes';

const FilterByDuration = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSubjectFilter, setShowSubjectFilter] = useState(true);
  const setValueDuration = useSetRecoilState(valueOfTypeDuration);
  const setValueChecked = useSetRecoilState(checkedBox);
  const [currentCategorieValue, setValue0fCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );

  const setChangeState = useSetRecoilState(changeState);
  const [counterForCategory, setCounterForcategory] =
    useRecoilState(categoryCounter);

  const [checkedState, setCheckedState] = useState({
    lessOneHour: false,
    overOneHour: false,
    overFiveHour: false
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const duration = params.get(allQuery.key.duration)?.split(',') || [];

    setCheckedState({
      lessOneHour: duration.includes(allQuery.value.duration.lessOneHour),
      overOneHour: duration.includes(allQuery.value.duration.overOneHour),
      overFiveHour: duration.includes(allQuery.value.duration.overFiveHour)
    });

    setValueDuration(duration.join(','));
    setValueChecked(duration.length > 0);
    setChangeState(false);
    setValue0fCurrentCategory(currentCategorieValue);
  }, [
    currentCategorieValue,
    setValueDuration,
    setValueChecked,
    setChangeState,
    setValue0fCurrentCategory
  ]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    //mise à jour de l'état local
    setCheckedState(prevState => {
      const updatedState = { ...prevState, [value]: checked };
      const queryParams = new URLSearchParams(window.location.search);
      let duration = queryParams.get(allQuery.key.duration)?.split(',') || [];

      if (checked) {
        if (!duration.includes(value)) duration.push(value);
      } else {
        duration = duration.filter(dure => dure !== value);
      }

      if (duration.length > 0) {
        queryParams.set(allQuery.key.duration, duration.join(','));
      } else {
        queryParams.delete(allQuery.key.duration);
      }

      window.history.replaceState(null, '', `?${queryParams.toString()}`);

      setValueDuration(duration.join(''));
      setCounterForcategory(
        counterForCategory >= 0 && checked
          ? counterForCategory + 1
          : counterForCategory > 0 && !checked
          ? counterForCategory - 1
          : counterForCategory
      );
      setChangeState(false);
      setValueChecked(checked);
      setValue0fCurrentCategory(currentCategorieValue);
      console.log(showFilter);

      return updatedState;
    });
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
                value={allQuery.value.duration.lessOneHour}
                checked={checkedState['lessOneHour']}
                onChange={handleCheckboxChange}
              />
              Moins d&apos;1 heure
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value={allQuery.value.duration.overOneHour}
                checked={checkedState['overOneHour']}
                onChange={handleCheckboxChange}
              />
              1 à 5 heures
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value={allQuery.value.duration.overFiveHour}
                checked={checkedState['overFiveHour']}
                onChange={handleCheckboxChange}
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
