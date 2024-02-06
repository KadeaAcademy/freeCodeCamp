import React from 'react';
import { Link } from 'gatsby';
import { Spacer } from '../../../components/helpers';

import LaptopIcon from '../../../assets/images/laptop.svg';
import AlgoIcon from '../../../assets/images/algorithmIcon.svg';
import LaediesActIcon from '../../../assets/images/partners/we-act-logo.png';

import './what-will-you-learn.css';
import CourseCardLanding from '../../CourseCard/course-card-landing';

interface LandingDetailsProps {
  isSignedIn?: boolean;
}

const WhatWillYouLearn = ({ isSignedIn }: LandingDetailsProps): JSX.Element => {
  return (
    <div className='landing-top'>
      <div>
        <h2 className='big-heading text-love-light text-center'>{`Que vas-tu apprendre ?`}</h2>
        <br />
        <p className='text-responsive text-center'>
          {`
          Si tu es novice en matière de codage, nous te recommandons de commencer par le début.
          `}
        </p>
      </div>
      <Spacer size={2} />
      <div className='card-course-detail-container-landing'>
        <CourseCardLanding
          icon={LaptopIcon}
          sponsorIcon={LaediesActIcon}
          alt=''
          isAvailable={true}
          isSignedIn={isSignedIn}
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

        <CourseCardLanding
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
      <div>
        <Link className='course-cta' to='/courses'>
          {'Voir tous les cours'}
        </Link>
      </div>
    </div>
  );
};

WhatWillYouLearn.displayName = 'WhatWillYouLearn';
export default WhatWillYouLearn;
