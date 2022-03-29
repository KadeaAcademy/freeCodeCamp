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
  challenges: ChallengeNode[];
  completedChallengeIds: string[];
}

export class BlockProgressBar extends Component<BlockProps> {
  static displayName: string;
  constructor(props: BlockProps) {
    super(props);
  }

  render(): JSX.Element {
    const { completedChallengeIds, challenges } = this.props;

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

    const percentageComplated = Math.floor(
      (completedCount / challengesWithCompleted.length) * 100
    );

    const BlockProgressBar = (
      <>
        <div className='progress-wrapper'>
          <ProgressBar now={percentageComplated} />
          <span>{`${percentageComplated}%`}</span>
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
