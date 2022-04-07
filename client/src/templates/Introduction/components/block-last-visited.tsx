import React, { Component } from 'react';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation, TFunction } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { SuperBlocks } from '../../../../../config/certification-settings';
import Caret from '../../../assets/icons/caret';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import GreenPass from '../../../assets/icons/green-pass';
import { completedChallengesSelector, executeGA } from '../../../redux';
import { ChallengeNode, CompletedChallenge } from '../../../redux/prop-types';
import { playTone } from '../../../utils/tone';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import Challenges from './challenges';
import '../intro.css';

const mapStateToProps = (
  state: unknown,
  ownProps: { blockDashedName: string } & unknown
) => {
  const expandedSelector = makeExpandedBlockSelector(ownProps.blockDashedName);

  return createSelector(
    expandedSelector,
    completedChallengesSelector,
    (isExpanded: boolean, completedChallenges: CompletedChallenge[]) => ({
      isExpanded,
      completedChallengeIds: completedChallenges.map(({ id }) => id)
    })
  )(state as Record<string, unknown>);
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ toggleBlock, executeGA }, dispatch);

interface BlockProps {
  blockDashedName: string;
  challenges: ChallengeNode[];
  completedChallengeIds: string[];
  executeGA: typeof executeGA;
  isExpanded: boolean;
  superBlock: SuperBlocks;
  blockIndex: number;
  t: TFunction;
  toggleBlock: typeof toggleBlock;
}

const mapIconStyle = { height: '15px', marginRight: '10px', width: '15px' };

export class BlockLastVisited extends Component<BlockProps> {
  static displayName: string;
  constructor(props: BlockProps) {
    super(props);

    this.handleBlockClick = this.handleBlockClick.bind(this);
  }

  handleBlockClick(): void {
    const { blockDashedName, toggleBlock, executeGA } = this.props;
    void playTone('block-toggle');
    executeGA({
      type: 'event',
      data: {
        category: 'Map Block Click',
        action: blockDashedName
      }
    });
    toggleBlock(blockDashedName);
  }

  renderCheckMark(isCompleted: boolean): JSX.Element {
    return isCompleted ? (
      <GreenPass style={mapIconStyle} />
    ) : (
      <GreenNotCompleted style={mapIconStyle} />
    );
  }

  render(): JSX.Element {
    const {
      blockDashedName,
      completedChallengeIds,
      challenges,
      isExpanded,
      superBlock,
      blockIndex,
      t
    } = this.props;

    let completedCount = 0;
    const challengesWithCompleted = challenges.map(({ challenge }) => {
      const { id } = challenge;
      const isCompleted = completedChallengeIds.some(
        (completedChallengeId: string) => completedChallengeId === id
      );
      if (isCompleted) {
        completedCount++;
      }
      return { ...challenge, isCompleted };
    });

    const isProjectBlock = challenges.some(({ challenge }) => {
      const isJsProject =
        challenge.order === 10 && challenge.challengeType === 5;

      const isOtherProject =
        challenge.challengeType === 3 ||
        challenge.challengeType === 4 ||
        challenge.challengeType === 10 ||
        challenge.challengeType === 12 ||
        challenge.challengeType === 13;

      const isTakeHomeProject = blockDashedName === 'take-home-projects';

      return (
        (isJsProject && !isTakeHomeProject) ||
        (isOtherProject && !isTakeHomeProject)
      );
    });

    const blockIntroObj: { title?: string; intro: string[] } = t(
      `intro:${superBlock}.blocks.${blockDashedName}`
    );
    const blockTitle = blockIntroObj ? blockIntroObj.title : null;

    const isBlockCompleted = completedCount === challengesWithCompleted.length;

    const challengeCompleted = challengesWithCompleted.filter(
      challenge => challenge.isCompleted === true
    );

    const lastVisitedChallenge = [];

    for (let index = 0; index < challengesWithCompleted.length; index++) {
      if (challengesWithCompleted[index].id === completedChallengeIds[0]) {
        lastVisitedChallenge.push(challengesWithCompleted[index + 1]);
        break;
      }
    }

    const Block = (
      <>
        {challengeCompleted.length != 0 &&
          lastVisitedChallenge.length != 0 &&
          !isBlockCompleted && (
            <>
              <div className={`block ${isExpanded ? 'open' : ''}`}>
                <div className='card-challenge'>
                  <div className='card-challenge-header'>
                    <div className='card-challenge-index'>{blockIndex}</div>
                    <h3 className='card-challenge-title'>{blockTitle}</h3>
                  </div>
                  <div className='card-challenge-body'>
                    <div className='card-challenge-icon'>
                      <FontAwesomeIcon icon={faBookOpen} />
                    </div>
                    <div className='card-challenge-content'>
                      {lastVisitedChallenge[0] && (
                        <div className='card-challenge-description'>
                          {`Leçon : ${lastVisitedChallenge[0].title}`}
                        </div>
                      )}
                      <Challenges
                        challengesWithCompleted={lastVisitedChallenge}
                        isProjectBlock={isProjectBlock}
                        superBlock={superBlock}
                        isLastVisited={true}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <button
                  aria-expanded={isExpanded}
                  className='map-title'
                  onClick={() => {
                    this.handleBlockClick();
                  }}
                >
                  <Caret />
                  <h4 className='course-title'>
                    {`${isExpanded ? 'fermer' : 'voir plus de chapitres'}`}
                  </h4>
                  <div className='map-title-completed course-title'>
                    {this.renderCheckMark(isBlockCompleted)}
                    <span className='map-completed-count'>{`${completedCount}/${challengesWithCompleted.length}`}</span>
                  </div>
                </button>
                {isExpanded && (
                  <Challenges
                    challengesWithCompleted={challengesWithCompleted}
                    isProjectBlock={isProjectBlock}
                    superBlock={superBlock}
                    isLastVisited={false}
                  />
                )}
              </div>
            </>
          )}
      </>
    );

    const blockLastVisitedrenderer = () => {
      return Block;
    };

    return <>{blockLastVisitedrenderer()}</>;
  }
}

BlockLastVisited.displayName = 'BlockLastVisited';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(BlockLastVisited));
