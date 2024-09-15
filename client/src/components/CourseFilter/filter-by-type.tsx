import React, { useEffect, useState } from 'react';
import './course-filter.css';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  categoryCounter,
  changeState,
  checkedBox,
  valueOfCurrentCategory,
  valueOfTypeCourse
} from '../../redux/atoms';
import { allQuery } from '../../utils/routes';

const FilterByType = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSubjectFilter, setShowSubjectFilter] = useState(true);
  const setValuype = useSetRecoilState(valueOfTypeCourse);
  const setValueChecked = useSetRecoilState(checkedBox);
  const [currentCategorieValue, setValue0fCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );

  const setChangeState = useSetRecoilState(changeState);
  const [counterForCategory, setCounterForcategory] =
    useRecoilState(categoryCounter);

  // État local pour gérer les cases cochées
  const [checkedState, setCheckedState] = useState({
    Cours: false,
    Parcours: false
  });

  // Charger l'état des cases cochées depuis les query strings de l'URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const types = params.get(allQuery.key.type)?.split(',') || [];

    setCheckedState({
      Cours: types.includes(allQuery.value.type.cours),
      Parcours: types.includes(allQuery.value.type.parcours)
    });

    // Mettre à jour les états liés
    setValuype(types.join(','));
    setValueChecked(types.length > 0);
    setChangeState(false);
    setValue0fCurrentCategory(currentCategorieValue);
  }, [
    currentCategorieValue,
    setValuype,
    setValueChecked,
    setChangeState,
    setValue0fCurrentCategory
  ]);

  // Mettre à jour les query strings lorsque l'utilisateur change l'état des cases
  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCheckedState(prevState => {
      const updatedState = { ...prevState, [value]: checked };
      const queryParams = new URLSearchParams(window.location.search);
      let types = queryParams.get(allQuery.key.type)?.split(',') || [];

      // Ajouter ou supprimer le type de la liste
      if (checked) {
        if (!types.includes(value)) types.push(value);
      } else {
        types = types.filter(type => type !== value);
      }

      // Mettre à jour le query string 'type' avec les nouvelles valeurs
      if (types.length > 0) {
        queryParams.set(allQuery.key.type, types.join(','));
      } else {
        queryParams.delete(allQuery.key.type);
      }

      // Mettre à jour l'URL sans recharger la page
      window.history.replaceState(null, '', `?${queryParams.toString()}`);

      // Mises à jour des états pour la gestion des filtres
      setValuype(types.join(','));
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
          <p className='filter-title'>Type</p>
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
                value='Cours'
                checked={checkedState.Cours}
                onChange={handleLanguageChange}
              />
              Cours
            </label>
            <label className='language__Label'>
              <input
                type='checkbox'
                value='Parcours'
                checked={checkedState.Parcours}
                onChange={handleLanguageChange}
              />
              Parcours
            </label>
          </div>
        </ul>
      </details>
    </div>
  );
};

FilterByType.displayName = 'FilterByType';
export default FilterByType;
