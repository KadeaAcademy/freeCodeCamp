import React, { useEffect, useState } from 'react';
import './course-filter.css';

import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  categoryCounter,
  changeState,
  checkedBox,
  valueOfCurrentCategory,
  valueOfTypeLevel
} from '../../redux/atoms';

const FilterByLevel = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSubjectFilter, setShowSubjectFilter] = useState(true);
  const setValueLevel = useSetRecoilState(valueOfTypeLevel);
  const setValueChecked = useSetRecoilState(checkedBox);
  const [currentCategorieValue, setValue0fCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );

  const setChangeState = useSetRecoilState(changeState);
  const [counterForCategory, setCounterForcategory] =
    useRecoilState(categoryCounter);

  const [checkedState, setCheckedState] = useState({
    Débutant: false,
    Intermédiaire: false,
    Avancé: false
  });

  // Charger l'état des cases à cocher depuis le localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const duration = params.get('niveau')?.split(',') || [];

    setCheckedState({
      Débutant: duration.includes('Débutant'),
      Intermédiaire: duration.includes('Intermediaire'),
      Avancé: duration.includes('Avancé')
    });

    setValueLevel(duration.join(','));
    setValueChecked(duration.length > 0);
    setChangeState(false);
    setValue0fCurrentCategory(currentCategorieValue);
  }, [
    currentCategorieValue,
    setValueLevel,
    setValueChecked,
    setValue0fCurrentCategory,
    setChangeState
  ]);

  // Sauvegarder l'état des cases à cocher dans le localStorage lorsqu'il change

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCheckedState(prevState => {
      const updatedState = { ...prevState, [value]: checked };
      const queryParams = new URLSearchParams(window.location.search);
      let level = queryParams.get('niveau')?.split(',') || [];

      if (checked) {
        if (!level.includes(value)) level.push(value);
      } else {
        level = level.filter(level => level !== value);
      }

      if (level.length > 0) {
        queryParams.set('niveau', level.join(','));
      } else {
        queryParams.delete('niveau');
      }

      window.history.replaceState(null, '', `?${queryParams.toString()}`);
      setValueLevel(level.join(''));

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
          <p className='filter-title'>Niveau</p>
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
                value='Débutant'
                checked={checkedState.Débutant}
                onChange={handleLevelChange}
              />
              Débutant
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value='Intermédiaire'
                checked={checkedState.Intermédiaire}
                onChange={handleLevelChange}
              />
              Intermédiaire
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value='Avancé'
                checked={checkedState.Avancé}
                onChange={handleLevelChange}
              />
              Avancé
            </label>
          </div>
        </ul>
      </details>
    </div>
  );
};

FilterByLevel.displayName = 'FilterByLevel';
export default FilterByLevel;
