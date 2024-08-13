import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import {
  Loader,
  Spacer,
  renderCourseCardSkeletons
} from '../../components/helpers';
import CourseCard from '../../components/CourseCard/course-card';
import LaptopIcon from '../../assets/images/laptop.svg';
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import { User } from '../../redux/prop-types';

const { apiLocation } = envData;

// TODO: update types for actions
interface ShowFccCoursesProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export function ShowFccCourses(props: ShowFccCoursesProps): JSX.Element {
  // const { t } = useTranslation();
  const { isSignedIn, navigate, showLoading } = props;
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        setIsDataOnLoading(false);
      }
    }, 3000);
    return () => {
      clearTimeout(timer); // cleanup useEffect to perform a React state update
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      {/* <Helmet title={`${t('buttons.settings')} | Code Learning Plateform`} /> */}
      <Helmet title={`Parcours Développement Web | Kadea Online`} />
      <Grid fluid={false} className='bg-light'>
        <Spacer size={1} />
        <div>
          <Row className='super-block-intro-page'>
            <Col md={12} sm={12} xs={12}>
              <p className='text-love-light fw-bold'>Parcours</p>
              <h1 className='big-heading'>Développement Web</h1>
              <Spacer size={1} />
            </Col>
            <Col className='' md={12} sm={12} xs={12}>
              <div className='alert bg-secondary standard-radius-5'>
                <div className='text-responsive'>
                  {`
                    Dans ce parcours, tu apprendras les langages que les développeurs 
                utilisent pour créer des pages Web : HTML (Hypertext Markup Language) 
                pour le contenu, et CSS (Cascading Style Sheets) pour la conception. 
                Ensuite, tu apprendras à créer des pages Web adaptées à différentes tailles d'écran et
                enfin, Tu vas utiliser le JavaScript pour rendre tes sites interactifs. 
                Tu apprendras les Algorithm, Data Structures, et les principes fondamentaux du langage de programmation JavaScript
                    `}
                </div>
              </div>
            </Col>
            <Spacer />
          </Row>
        </div>
      </Grid>

      <Grid fluid={false}>
        <Spacer size={1} />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className='course__number'>
              <h2 className='big-subheading'>{`Parcours d'apprentissage`}</h2>
              <span>2 cours</span>
            </div>
            <Spacer size={2} />
          </Col>
          <Col className='' md={12} sm={12} xs={12}>
            {!isDataOnLoading ? (
              <div className='card-course-detail-container'>
                <CourseCard
                  language='French'
                  icon={LaptopIcon}
                  sponsorIcon={LaediesActIcon}
                  alt=''
                  isAvailable={true}
                  isSignedIn={isSignedIn}
                  title={`Responsive Web Design`}
                  link={`/learn/responsive-web-design`}
                  buttonText={`Suivre le cours  `}
                  description={`
                Dans ce cours, tu apprendras les langages que les développeurs 
                utilisent pour créer des pages Web : HTML (Hypertext Markup Language) 
                pour le contenu, et CSS (Cascading Style Sheets) pour la conception. 
                Enfin, tu apprendras à créer des pages Web adaptées à différentes tailles d'écran.
                `}
                />
                <CourseCard
                  language='French'
                  icon={AlgoIcon}
                  alt=''
                  isAvailable={true}
                  isSignedIn={isSignedIn}
                  title={`JavaScript Algorithms and Data Structures`}
                  buttonText={`Suivre le cours  `}
                  link={`/learn/javascript-algorithms-and-data-structures`}
                  description={`Alors que HTML et CSS contrôlent le contenu et le style  d'une page, 
                JavaScript est utilisé pour la rendre interactive. Dans le cadre du 
                cours JavaScript Algorithm and Data Structures, tu apprendras 
                les principes fondamentaux de JavaScript, etc.`}
                />
              </div>
            ) : (
              <div className='card-course-detail-container'>
                {renderCourseCardSkeletons(2)}
              </div>
            )}
          </Col>
        </Row>
      </Grid>
    </>
  );
}

ShowFccCourses.displayName = 'ShowFccCourses';

export default connect(mapStateToProps, mapDispatchToProps)(ShowFccCourses);
