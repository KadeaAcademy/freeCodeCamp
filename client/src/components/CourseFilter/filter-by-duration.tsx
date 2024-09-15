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

  // État local pour gérer les cases cochées
  const [checkedState, setCheckedState] = useState({
    lessOneHour: false,
    overOneHour: false,
    overFiveHour: false
  });

  // Charger l'état des cases cochées depuis les query strings de l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const duration = params.get(allQuery.key.duration)?.split(',') || [];

    // Convertir les valeurs affichées en clés internes
    const checkedState = {
      lessOneHour: duration.includes('<1h'),
      overOneHour: duration.includes('>1h'),
      overFiveHour: duration.includes('>5h')
    };

    setCheckedState(checkedState);
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

  // Mettre à jour les query strings lorsque l'utilisateur change l'état des cases
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCheckedState(prevState => {
      const updatedState = { ...prevState, [value]: checked };
      const queryParams = new URLSearchParams(window.location.search);
      let duration = queryParams.get(allQuery.key.duration)?.split(',') || [];

      // Convertir les clés internes en valeurs affichées
      const displayValue =
        {
          lessOneHour: '<1h',
          overOneHour: '>1h',
          overFiveHour: '>5h'
        }[value] || '';

      // Ajouter ou supprimer la valeur de la liste
      if (checked) {
        if (!duration.includes(displayValue)) duration.push(displayValue);
      } else {
        duration = duration.filter(type => type !== displayValue);
      }

      // Mettre à jour le query string 'duration' avec les nouvelles valeurs
      if (duration.length > 0) {
        queryParams.set(allQuery.key.duration, duration.join(','));
      } else {
        queryParams.delete(allQuery.key.duration);
      }

      // Mettre à jour l'URL sans recharger la page
      window.history.replaceState(null, '', `?${queryParams.toString()}`);

      setValueDuration(duration.join(','));
      setCounterForcategory(
        counterForCategory >= 0 && checked
          ? counterForCategory + 1
          : counterForCategory > 0 && !checked
          ? counterForCategory - 1
          : counterForCategory
      );
      setValueChecked(duration.length > 0);
      setChangeState(false);
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
          <p className='filter-title'>Duration</p>
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
          <div className='duration-filter'>
            <label className='duration__Label'>
              <input
                type='checkbox'
                value='lessOneHour'
                checked={checkedState.lessOneHour}
                onChange={handleCheckboxChange}
              />
              -1h
            </label>
            <label className='duration__Label'>
              <input
                type='checkbox'
                value='overOneHour'
                checked={checkedState.overOneHour}
                onChange={handleCheckboxChange}
              />
              1h - 5h
            </label>
            <label className='duration__Label'>
              <input
                type='checkbox'
                value='overFiveHour'
                checked={checkedState.overFiveHour}
                onChange={handleCheckboxChange}
              />
              + 5h
            </label>
          </div>
        </ul>
      </details>
    </div>
  );
};

FilterByDuration.displayName = 'FilterByDuration';
export default FilterByDuration;
