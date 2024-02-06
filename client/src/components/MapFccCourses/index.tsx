import { graphql, useStaticQuery } from 'gatsby';
import i18next from 'i18next';
import React from 'react';

import { SuperBlocks } from '../../../../config/certification-settings';
import envData from '../../../../config/env.json';
import { isAuditedCert } from '../../../../utils/is-audited';
import { generateIconComponent } from '../../assets/icons';
// import CourseCard from '../CourseCard/course-card';
import { ChallengeNode } from '../../redux/prop-types';
import { Link, Spacer } from '../helpers';

const { curriculumLocale } = envData;

interface MapFccCoursesProps {
  currentSuperBlock?: SuperBlocks | null;
  forLanding?: boolean;
}

interface MapFccCoursesData {
  allChallengeNode: {
    nodes: ChallengeNode[];
  };
}

function createSuperBlockTitle(superBlock: SuperBlocks) {
  const superBlockTitle = i18next.t(`intro:${superBlock}.title`);
  return superBlock === 'coding-interview-prep'
    ? i18next.t('learn.cert-map-estimates.coding-prep', {
        title: superBlockTitle
      })
    : i18next.t('learn.cert-map-estimates.certs', { title: superBlockTitle });
}

function renderLandingMapFccCourses(nodes: ChallengeNode[]) {
  nodes = nodes.filter(
    ({ challenge }) => challenge.superBlock !== SuperBlocks.CodingInterviewPrep
  );
  return (
    <div data-test-label='certifications'>
      {nodes.map(({ challenge }, i) => (
        // <li key={i}>
        //   <Link
        //     className='btn link-btn btn-lg'
        //     to={`/learn/${challenge.superBlock}/`}
        //   >
        //     <div>
        //       {generateIconComponent(challenge.superBlock, 'map-icon')}
        //       {i18next.t(`intro:${challenge.superBlock}.title`)}
        //     </div>
        //   </Link>
        // </li>
        <div
          key={i}
          className='card-course-detail-back standard-radius-5 card-outlin-border bg-light'
        >
          <div className='card-course-detail-unit position-relative'>
            <div className='card-outlin-border bg-light standard-radius-5'>
              <div className='card-course-detail-header'></div>
              <div className='card-course-detail-item'>
                <h4 className='fw-bold text-love-light'>
                  {i18next.t(`intro:${challenge.superBlock}.title`)}
                </h4>
              </div>
              <div className='card-course-detail-item  flexible'>
                <p className='text-responsive'>
                  {/* {`${description.substring(0, 300)}...`} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  asperiores dolores ducimus consectetur error? Alias, vitae! In
                  aliquam doloribus et dolor soluta, eaque a accusantium cumque
                  porro officiis nemo delectus?
                </p>
              </div>
              <div className='card-course-detail-footer'>
                <div className='push'></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function renderLearnMapFccCourses(
  nodes: ChallengeNode[],
  currentSuperBlock: MapFccCoursesProps['currentSuperBlock']
) {
  nodes = nodes.filter(
    ({ challenge }) => challenge.superBlock !== currentSuperBlock
  );
  return curriculumLocale === 'english' ? (
    <ul data-test-label='learn-curriculum-map'>
      {nodes.map(({ challenge }, i) => (
        <li key={i}>
          <Link
            className='btn link-btn btn-lg'
            to={`/learn/${challenge.superBlock}/`}
          >
            <div>
              {generateIconComponent(challenge.superBlock, 'map-icon')}
              {createSuperBlockTitle(challenge.superBlock)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <ul data-test-label='learn-curriculum-map'>
      {nodes
        .filter(({ challenge }) =>
          isAuditedCert(curriculumLocale, challenge.superBlock)
        )
        .map(({ challenge }, i) => (
          <li key={i}>
            <Link
              className='btn link-btn btn-lg'
              to={`/learn/${challenge.superBlock}/`}
            >
              <div>
                {generateIconComponent(challenge.superBlock, 'map-icon')}
                {createSuperBlockTitle(challenge.superBlock)}
              </div>
            </Link>
          </li>
        ))}
      <hr />
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: 0 }}>{i18next.t('learn.help-translate')} </p>
        <Link
          external={true}
          sameTab={false}
          to={i18next.t('links:help-translate-link-url')}
        >
          {i18next.t('learn.help-translate-link')}
        </Link>
        <Spacer />
      </div>
      {nodes
        .filter(
          ({ challenge }) =>
            !isAuditedCert(curriculumLocale, challenge.superBlock)
        )
        .map(({ challenge }, i) => (
          <li key={i}>
            <Link
              className='btn link-btn btn-lg'
              to={`/learn/${challenge.superBlock}/`}
            >
              <div>
                {generateIconComponent(challenge.superBlock, 'map-icon')}
                {createSuperBlockTitle(challenge.superBlock)}
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export function MapFccCourses({
  forLanding = false,
  currentSuperBlock = null
}: MapFccCoursesProps): React.ReactElement {
  /*
   * this query gets the first challenge from each block and the first block
   * from each superblock, leaving you with one challenge from each
   * superblock
   */
  const data: MapFccCoursesData = useStaticQuery(graphql`
    query SuperBlockNodesFccCourses {
      allChallengeNode(
        sort: { fields: [challenge___superOrder] }
        filter: { challenge: { order: { eq: 0 }, challengeOrder: { eq: 0 } } }
      ) {
        nodes {
          challenge {
            superBlock
            dashedName
          }
        }
      }
    }
  `);

  const nodes = data.allChallengeNode.nodes;

  return (
    <div
      className='card-course-detail-container'
      data-test-label='learn-curriculum-map'
    >
      {forLanding
        ? renderLandingMapFccCourses(nodes)
        : renderLearnMapFccCourses(nodes, currentSuperBlock)}
    </div>
  );
}

MapFccCourses.displayName = 'MapFccCourses';

export default MapFccCourses;
