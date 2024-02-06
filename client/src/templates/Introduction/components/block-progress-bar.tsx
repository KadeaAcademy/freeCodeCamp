import React, { Component } from 'react';
import { ProgressBar } from '@freecodecamp/react-bootstrap';
import '../intro.css';
interface BlockProgressBarProps {
  completedChallengeCount?: number;
  challengeCount?: number;
}

export class BlockProgressBar extends Component<BlockProgressBarProps> {
  static displayName: string;
  constructor(props: BlockProgressBarProps) {
    super(props);
  }

  render(): JSX.Element {
    const { completedChallengeCount, challengeCount } = this.props;

    const percentageCompleted =
      completedChallengeCount && challengeCount
        ? Math.floor((completedChallengeCount / challengeCount) * 100)
        : 0;

    const BlockProgressBar = (
      <>
        <div className='progress-wrapper'>
          <h2>
            <span>{`${percentageCompleted}% ${
              percentageCompleted === 0 || percentageCompleted === 1
                ? 'achevé'
                : 'achevés'
            }`}</span>
          </h2>
          <br />
          <ProgressBar now={percentageCompleted} animated={'true'} />
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

export default BlockProgressBar;
