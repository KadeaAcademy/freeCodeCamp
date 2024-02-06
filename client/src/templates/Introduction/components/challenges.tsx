import { Link } from 'gatsby';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { executeGA } from '../../../redux';
import { ExecuteGaArg } from '../../../pages/donate';
import { ChallengeWithCompletedNode } from '../../../redux/prop-types';
import isNewRespCert from '../../../utils/is-new-responsive-web-design-cert';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

interface Challenge {
  block: string;
  challengeType: number;
  dashedName: string;
  fields: {
    blockName: string;
    slug: string;
  };
  id: string;
  order: number;
  isCompleted: boolean;
  superBlock: string;
  title: string;
}
interface Challenges {
  challengesWithCompleted?: ChallengeWithCompletedNode[];
  currentChallenge?: Challenge;
  executeGA: (payload: ExecuteGaArg) => void;
  isProjectBlock: boolean;
  superBlock: string;
  isLastVisited: boolean;
}

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

function Challenges({
  challengesWithCompleted,
  currentChallenge,
  executeGA,
  isProjectBlock,
  superBlock,
  isLastVisited
}: Challenges): JSX.Element {
  const handleChallengeClick = (slug: string) =>
    executeGA({
      type: 'event',
      data: {
        category: 'Map Challenge Click',
        action: slug
      }
    });

  const renderCheckMark = (isCompleted: boolean) =>
    isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );

  const isGridMap = isNewRespCert(superBlock);

  return isLastVisited ? (
    <>
      {currentChallenge ? (
        <>
          <div
            className='card-challenge-action'
            id={currentChallenge.dashedName}
          >
            {!isProjectBlock ? (
              <Link
                className='link-action standard-radius-20'
                onClick={() =>
                  handleChallengeClick(currentChallenge.fields.slug)
                }
                to={currentChallenge.fields.slug}
              >
                Continuer la leçon
              </Link>
            ) : (
              <Link
                className='link-action standard-radius-20'
                onClick={() =>
                  handleChallengeClick(currentChallenge.fields.slug)
                }
                to={currentChallenge.fields.slug}
              >
                Continuer la leçon
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div className='card-challenge-visited-action'>
            <span className='big-block-title text-success fw-800'>Fini</span>
          </div>
        </>
      )}
    </>
  ) : isGridMap ? (
    <ul className={`map-challenges-ul map-challenges-grid `}>
      {challengesWithCompleted != undefined &&
        challengesWithCompleted.map((challenge, i) => (
          <li
            className={`map-challenge-title map-challenge-title-grid ${
              isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
            }`}
            id={challenge.dashedName}
            key={`map-challenge ${challenge.fields.slug}`}
          >
            {!isProjectBlock ? (
              <Link
                onClick={() => handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
                className={`map-grid-item ${
                  challenge.isCompleted ? 'challenge-completed' : ''
                }`}
              >
                {i + 1}
              </Link>
            ) : (
              <Link
                onClick={() => handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
              >
                {challenge.title}
                <span className=' badge map-badge map-project-checkmark'>
                  {renderCheckMark(challenge.isCompleted)}
                </span>
              </Link>
            )}
          </li>
        ))}
    </ul>
  ) : (
    <ul className={`map-challenges-ul`}>
      {challengesWithCompleted != undefined &&
        challengesWithCompleted.map(challenge => (
          <li
            className={`map-challenge-title ${
              isProjectBlock ? 'map-project-wrap' : 'map-challenge-wrap'
            }`}
            id={challenge.dashedName}
            key={'map-challenge' + challenge.fields.slug}
          >
            {!isProjectBlock ? (
              <Link
                onClick={() => handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
              >
                <span className='badge map-badge'>
                  {renderCheckMark(challenge.isCompleted)}
                </span>
                {challenge.title}
              </Link>
            ) : (
              <Link
                onClick={() => handleChallengeClick(challenge.fields.slug)}
                to={challenge.fields.slug}
              >
                {challenge.title}
                <span className='badge map-badge map-project-checkmark'>
                  {renderCheckMark(challenge.isCompleted)}
                </span>
              </Link>
            )}
          </li>
        ))}
    </ul>
  );
}

Challenges.displayName = 'Challenges';

export default connect(null, mapDispatchToProps)(withTranslation()(Challenges));
