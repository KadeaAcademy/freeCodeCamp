import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { ProgressBar } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { completedChallengesSelector, executeGA } from '../../../redux';
import { ChallengeNode, CompletedChallenge } from '../../../redux/prop-types';
import { makeExpandedBlockSelector, toggleBlock } from '../redux';
import '../intro.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: unknown, ownProps: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
  challenges?: ChallengeNode[][];
  completedChallengeIds?: string[];
}

export class BlockProgressBar extends Component<BlockProps> {
  static displayName: string;
  constructor(props: BlockProps) {
    super(props);
  }

  render(): JSX.Element {
    const { completedChallengeIds, challenges } = this.props;

    let completedCount = 0;
    let challengeCount = 0;

    if (challenges && completedChallengeIds) {
      challenges.pop(); // delete the project module which is always at the end of the table
      for (const challengeBlock of challenges) {
        for (const { challenge } of challengeBlock) {
          const { id } = challenge;
          const isCompleted = completedChallengeIds.some(
            (completedChallengeId: string) => completedChallengeId === id
          );
          if (isCompleted) {
            completedCount++;
          }
          challengeCount++;
        }
      }
    } else {
      challengeCount = 100;
    }

    const percentageComplated = Math.floor(
      (completedCount / challengeCount) * 100
    );

    const BlockProgressBar = (
      <>
        <div className='progress-wrapper'>
          <h2>
            <span>{`${percentageComplated}% parcouru`}</span>
          </h2>
          <br />
          <ProgressBar now={percentageComplated} animated />
        </div>
      </>
    );

    const progressBarRender = () => {
      return BlockProgressBar;
    };

    return <>{progressBarRender()}</>;
  }
}

BlockProgressBar.displayName = 'BlockProgressBar';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(BlockProgressBar));
