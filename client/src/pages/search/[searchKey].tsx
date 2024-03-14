import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { Grid } from '@freecodecamp/react-bootstrap';
import { Spacer, renderCourseCardSkeletons } from '../../components/helpers';
import envData from '../../../../config/env.json';

// import AlgoIcon from '../../assets/images/algorithmIcon.svg';
// import LaptopIcon from '../../assets/images/algorithmIcon.svg';
// import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';

import './search.css';

import { MoodleCoursesFiltered } from '../../components/CourseFilter/course-filter';
import { getExternalResource } from '../../utils/ajax';
// import CourseCard from '../../components/CourseCard/course-card';

const { moodleApiBaseUrl, moodleApiToken } = envData;

function Searches({ params }: { params: { searchKey: string } }): JSX.Element {
  const { searchKey } = params;

  const [key, setKey] = useState<string>(searchKey);

  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(false);

  const [field, setField] = useState<'course' | 'path'>('course');

  async function searchCourse(key: string): Promise<void> {
    setIsDataOnLoading(true);
    try {
      const moodleCourseFound: MoodleCoursesFiltered | null =
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        await getExternalResource<MoodleCoursesFiltered>(
          `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_search_courses&criterianame=${'search'}&criteriavalue=${key}}&moodlewsrestformat=json`
        );
      if (moodleCourseFound != null)
        console.log('Search moodle = ', moodleCourseFound);
    } catch (error) {
      console.log(error);
    }
    setIsDataOnLoading(false);
  }

  useEffect(() => {
    void searchCourse(searchKey);
  }, [searchKey]);

  return (
    <Grid>
      <div>
        <Spacer size={1} />

        <form
          className='search-form'
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            void navigate('/search/' + key.toLocaleLowerCase());
          }}
        >
          <div>
            <svg
              width='40px'
              height='40px'
              viewBox='0 -0.5 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z'
                stroke='#000'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z'
                fill='#000'
              />
            </svg>
            <input
              type='text'
              placeholder='Recherchez des modules, cours, parcours, ...'
              value={key}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setKey(event.target.value);
              }}
              required
            />
          </div>
        </form>
        <Spacer size={1} />
        {/* NOT FOUND */}
        {/* <div>
          <p>
            Désolé, nous n'avons pas trouvé de résultats pour "
            <span style={{ color: 'red' }}>{searchKey}</span>". Veuillez essayer
            une autre requête.
          </p>
          <h1>D'autres apprenants prennent également :</h1>
          <Spacer />

          <div className='card-course-detail-container'>
            <CourseCard
              icon={LaptopIcon}
              sponsorIcon={LaediesActIcon}
              alt=''
              name={'Josh'}
              isAvailable={true}
              isSignedIn={true}
              title={`Responsive Web Design`}
              buttonText={`Suivre le cours  `}
              link={'/learn/responsive-web-design/'}
              description={`
                Dans ce cours, tu apprendras les langages que les développeurs 
                utilisent pour créer des pages Web : HTML (Hypertext Markup Language) 
                pour le contenu, et CSS (Cascading Style Sheets) pour la conception. 
                Enfin, tu apprendras à créer des pages Web adaptées à différentes tailles d'écran.
                `}
            />
            <CourseCard
              icon={AlgoIcon}
              alt=''
              isAvailable={true}
              isSignedIn={true}
              name={'Josh'}
              title={`JavaScript Algorithms and Data Structures`}
              buttonText={`Suivre le cours  `}
              link={`/learn/javascript-algorithms-and-data-structures`}
              description={`Alors que HTML et CSS contrôlent le contenu et le style  d'une page, 
                JavaScript est utilisé pour la rendre interactive. Dans le cadre du 
                cours JavaScript Algorithm and Data Structures, tu apprendras 
                les principes fondamentaux de JavaScript, etc.`}
            />
            <CourseCard
              icon={AlgoIcon}
              alt=''
              isAvailable={true}
              isSignedIn={true}
              name={'Josh'}
              title={`JavaScript Algorithms and Data Structures`}
              buttonText={`Suivre le cours  `}
              link={`/learn/javascript-algorithms-and-data-structures`}
              description={`Alors que HTML et CSS contrôlent le contenu et le style  d'une page, 
                JavaScript est utilisé pour la rendre interactive. Dans le cadre du 
                cours JavaScript Algorithm and Data Structures, tu apprendras 
                les principes fondamentaux de JavaScript, etc.`}
            />
          </div>
        </div> */}
        {/* NOT FOUND */}
        <div className=' search-result '>
          <h1 className='big-subheading'>
            Resultat de recherche de
            <span style={{ color: 'red' }}>{searchKey}</span>
          </h1>
          <div>
            <button
              onClick={() => {
                setField('course');
              }}
              className={` ${field == 'course' ? 'selected-field' : ''}`}
            >
              Cours
            </button>
            <button
              className={` ${field == 'path' ? 'selected-field' : ''}`}
              onClick={() => {
                setField('path');
              }}
            >
              Parcours
            </button>
          </div>
          <Spacer size={1} />
          {isDataOnLoading ? (
            <div className='card-course-detail-container'>
              {renderCourseCardSkeletons(6)}
            </div>
          ) : field == 'course' ? (
            <div>Courses</div>
          ) : (
            <div>Parcours</div>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default Searches;
