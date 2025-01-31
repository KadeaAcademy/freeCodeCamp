import React, { useRef, useState } from 'react';
import { Link } from '@reach/router';

/**
 * Supprime les balises HTML d'une chaîne et retourne uniquement le texte.
 * @param {string} html - La chaîne HTML à nettoyer.
 * @return {string} - Le texte nettoyé sans balises HTML.
 */
// const stripHtmlTags = (html: string): string => {
//   const doc = new DOMParser().parseFromString(html, 'text/html');
//   return doc.body.textContent || '';
// };

import './courses-category-card.css';
import { navigate } from 'gatsby';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import devIcon from '../../assets/icons/dev-icon.svg';
import programmationIcon from '../../assets/icons/programation.png';
import marketingIcone from '../../assets/icons/marketing.png';
import itelligenceIcone from '../../assets/icons/bureaut.svg';
import bureautiqueIcone from '../../assets/icons/computer.svg';

import {
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  RavenCourse,
  RavenFetchCoursesDto
} from '../../client-only-routes/show-courses';
import { routes } from '../../utils/routes';
import {
  myAllDataCourses,
  titleOfCategorieValue,
  tokenRaven,
  valueOfCurrentCategory
} from '../../redux/atoms';

interface CourseFilterProps {
  screenWidth: number;
  setRavenCourses: React.Dispatch<
    React.SetStateAction<RavenCourse[] | null | undefined>
  >;
  setMoodleCourses: React.Dispatch<
    React.SetStateAction<MoodleCoursesCatalogue | null | undefined>
  >;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDataOnLoading: React.Dispatch<React.SetStateAction<boolean>>;
  courseCategories: MoodleCourseCategory[] | null | undefined;
  currentCategory: number | null;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setRavenPath: React.Dispatch<React.SetStateAction<RavenCourse[] | null>>;
  getRavenResourcesPath: RavenFetchCoursesDto;
}

const CoursesCategoryCard = ({
  setIsDataOnLoading,
  courseCategories,
  setCurrentCategory,
  setCurrentPage
}: CourseFilterProps): JSX.Element => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const setValueOfButton = useSetRecoilState(titleOfCategorieValue);
  const setCurrent = useSetRecoilState(valueOfCurrentCategory);
  const setValueOfAllRessourcesData = useSetRecoilState(myAllDataCourses);
  const valueDeToken = useRecoilValue(tokenRaven);

  const scrollAmount = 320; // Adjust based on card width and gap
  // const categoryDescrTitle = 'développement';

  const scrollLeft = (containerRef: React.RefObject<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = (containerRef: React.RefObject<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryId: number) => {
    setIsSelected(categoryId);
    setCurrentCategory(categoryId);
    setCurrent(categoryId);
    setCurrentPage(1); // Retour à la première page à chaque fois que la catégory change
    setIsDataOnLoading(true);
  };

  //selectionne une catégorie par rapport à la catégorie passée en simulant le clic sur le clavier
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    categoryId: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      void handleCategoryClick(categoryId);
      setCurrent(categoryId);
    }
  };
  const getCourseIcon = (courseName: string): string => {
    if (courseName.includes('Marketing')) {
      return marketingIcone;
    } else if (courseName.includes('Bureautique')) {
      return bureautiqueIcone;
    } else if (courseName.includes('artificielle')) {
      return itelligenceIcone;
    } else {
      return devIcon;
    }
  };

  const handleButtonClickMoodle = async (
    categoryId: number,
    categoryName: string
  ) => {
    const url = routes.catalogue.moodle.replace(':category', categoryName);
    // await handleCategoryClick(categoryId);
    setValueOfAllRessourcesData([]);
    setCurrent(categoryId);
    await navigate(url);
  };

  return (
    <div className='main'>
      <div className='categories-wrapper'>
        <p className='big-subheading'>Sujets tendance</p>

        <div className='chevron'>
          <button
            className='scroll-button left'
            onClick={() => scrollLeft(containerRef1)}
          >
            ‹
          </button>
          <button
            className='scroll-button right'
            onClick={() => scrollRight(containerRef1)}
          >
            ›
          </button>
        </div>
        <div className='categories-container' ref={containerRef1}>
          <button
            className={`category-card `}
            onClick={() => {
              setCurrent(-1);
              setValueOfButton(' Programmation');
              void navigate(routes.catalogue.programmation);
              //  navigate(`${routes.catalogue.catalogueTitle}/${e.target.value}`)
            }}
          >
            {/* <span className='card-title'>Explorer tout</span> */}
            <div className='card-content'>
              <p className='category-name'>Programmation</p>

              <img src={programmationIcon} className='img-icon' alt='icon' />
            </div>
          </button>
          <button
            className={
              valueDeToken == null ? ' hide__category' : 'category-card '
            }
            onClick={() => {
              setCurrent(-2);
              setValueOfButton('Amazon Web Service');
              void navigate(routes.catalogue.aws);
              //  navigate(`${routes.catalogue.catalogueTitle}/${e.target.value}`)
            }}
            // onKeyPress={event => handleKeyPress(event, -2)}
            tabIndex={0}
          >
            {/* <span className='card-title '>Explorer tout</span> */}
            <div className='card-content '>
              <p
                className='category-name'
                // Makes the element focusable
              >
                Amazon Web Service
              </p>
              <img src={devIcon} className='img-icon' alt='icon' />
            </div>
          </button>
          {courseCategories?.map(categorie => (
            <button
              key={categorie.id}
              className={`category-card ${
                isSelected === categorie.id ? 'selecte__card category-card' : ''
              }`}
              onClick={() => {
                void setValueOfButton(
                  categorie.name.includes('amp')
                    ? 'marketing-communication'
                    : categorie.name.includes('artificielle')
                    ? 'intelligence-artificielle'
                    : categorie.name
                );
                void handleButtonClickMoodle(
                  categorie.id,
                  categorie.name.includes('amp')
                    ? 'marketing-communication'
                    : categorie.name.includes('artificielle')
                    ? 'intelligence-artificielle'
                    : categorie.name
                );
              }}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return,
              onKeyPress={event => handleKeyPress(event, categorie.id)}
              tabIndex={0} // rendre l'élément focusable via le clavier et l'inclure dans la tabulation
            >
              {/* <span className='card-title'>Explorer tout</span> */}
              <div className='card-content'>
                <p className='category-name'>
                  {categorie.name.includes('amp')
                    ? 'Marketing & Communication'
                    : categorie.name.includes('artificielle')
                    ? 'Intelligence Artificielle'
                    : categorie.name}
                </p>
                <img
                  src={getCourseIcon(categorie.name)}
                  className='img-icon'
                  alt={`${categorie.name} icon`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className='categories-container-banner'>
        <Link to='/learning-path/developpement-web' className='link-reset'>
          <div>
            <h2 className='ti'>Nouveau Parcours</h2>
          </div>
          <h2 className='path-title'>Découvre le parcours Programmation</h2>
          <p className='path-description'>
            {/* {getDescriptionByCategory(categoryDescrTitle || '')}  on utilisera cette ligne lorsque l'on voudra que les shrot description viennent tous de la structure des données*/}
            Dans ce parcours, tu apprendras à créer des pages Web avec HTML pour
            le contenu, CSS pour la conception, et JavaScript pour rendre les
            sites interactifs. Tu découvriras également les algorithmes, les
            structures de données, et les bases du langage JavaScript.
          </p>
        </Link>
      </div>
    </div>
  );
};

CoursesCategoryCard.displayName = 'coursesCategoryCard';
export default CoursesCategoryCard;
