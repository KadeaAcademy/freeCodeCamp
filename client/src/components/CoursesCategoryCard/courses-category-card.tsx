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

// import './courses-category-card.css'; // Supprimé
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

  // Styles communs pour éviter la répétition
  const cardBaseClasses =
    'flex justify-between items-center p-4 rounded-xl border-none box-border cursor-pointer transition-colors duration-200 min-w-[200px] md:flex-none md:max-w-[230px] lg:max-w-[250px] w-full';
  const cardSelectedClasses = 'bg-[#e5203d] text-white';
  const cardDefaultClasses = 'bg-black text-white hover:bg-[#e5203d]';

  return (
    <div className='flex flex-col gap-8 mb-8 w-full max-w-full'>
      <div className='flex flex-col'>
        <p className='text-2xl font-semibold mb-4'>Sujets tendance</p>

        <div className='flex self-end justify-end mb-2 gap-1'>
          <button
            className='flex bg-white border border-black text-black text-xl px-4 py-1 font-extrabold rounded-lg cursor-pointer hover:bg-[#e5203d] hover:text-white mr-4'
            onClick={() => scrollLeft(containerRef1)}
          >
            ‹
          </button>
          <button
            className='flex bg-white border border-black text-black text-xl px-4 py-1 font-extrabold rounded-lg cursor-pointer hover:bg-[#e5203d] hover:text-white'
            onClick={() => scrollRight(containerRef1)}
          >
            ›
          </button>
        </div>

        {/* Container avec scroll horizontal caché */}
        <div
          className='flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full lg:max-w-[72vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
          ref={containerRef1}
        >
          <button
            className={`${cardBaseClasses} ${cardDefaultClasses}`}
            onClick={() => {
              setCurrent(-1);
              setValueOfButton(' Programmation');
              void navigate(routes.catalogue.programmation);
            }}
          >
            {/* <span className='card-title'>Explorer tout</span> */}
            <div className='flex justify-between items-center gap-4 w-full text-white'>
              <p className='text-white font-bold text-left w-full p-0 m-0 text-base md:text-[20px]'>
                Programmation
              </p>

              <img
                src={programmationIcon}
                className='w-[25px] h-[25px] md:w-[32%] lg:w-[80px] lg:h-[80px] object-contain'
                alt='icon'
              />
            </div>
          </button>
          <button
            className={`${cardBaseClasses} ${
              valueDeToken == null ? cardDefaultClasses : cardDefaultClasses
            }`}
            onClick={() => {
              setCurrent(-2);
              setValueOfButton('Amazon Web Service');
              void navigate(routes.catalogue.aws);
            }}
            // onKeyPress={event => handleKeyPress(event, -2)}
            tabIndex={0}
          >
            {/* <span className='card-title '>Explorer tout</span> */}
            <div className='flex justify-between items-center gap-4 w-full text-white'>
              <p
                className='text-white font-bold text-left w-full p-0 m-0 text-base md:text-[20px]'
                // Makes the element focusable
              >
                Amazon Web Service
              </p>
              <img
                src={devIcon}
                className='w-[25px] h-[25px] md:w-[32%] lg:w-[80px] lg:h-[80px] object-contain'
                alt='icon'
              />
            </div>
          </button>
          {courseCategories?.map(categorie => (
            <button
              key={categorie.id}
              className={`${cardBaseClasses} ${
                isSelected === categorie.id
                  ? cardSelectedClasses
                  : cardDefaultClasses
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
              <div className='flex justify-between items-center gap-4 w-full text-white'>
                <p className='text-white font-bold text-left w-full p-0 m-0 text-base md:text-[20px]'>
                  {categorie.name.includes('amp')
                    ? 'Marketing & Communication'
                    : categorie.name.includes('artificielle')
                    ? 'Intelligence Artificielle'
                    : categorie.name}
                </p>
                <img
                  src={getCourseIcon(categorie.name)}
                  className='w-[25px] h-[25px] md:w-[32%] lg:w-[80px] lg:h-[80px] object-contain'
                  alt={`${categorie.name} icon`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className='w-full p-4 sm:p-8 md:px-12 md:py-4 lg:p-8 border border-black rounded-[10px] flex flex-col gap-2 flex-grow box-border'>
        <Link
          to='/learning-path/developpement-web'
          className='no-underline text-inherit hover:text-black hover:no-underline'
        >
          <div>
            <h2 className='text-white bg-[#e5203d] rounded-2xl inline-block w-[11rem] p-[0.33rem] text-center text-[0.5rem] sm:text-base cursor-pointer'>
              Nouveau Parcours
            </h2>
          </div>
          <h2 className='text-black cursor-pointer text-xl font-bold mt-2'>
            Découvre le parcours Programmation
          </h2>
          <p className='text-black cursor-pointer'>
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
