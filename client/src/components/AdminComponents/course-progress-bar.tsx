import React from 'react';
import { ProgressBar } from '@freecodecamp/react-bootstrap';
import './course-progress-bar.css';

interface CourseProgressBarProps {
  challengeCount?: number;
  completedChallengeCount?: number;
  coursName?: string;
}

export function CourseProgressBar(props: CourseProgressBarProps): JSX.Element {
  const { challengeCount, completedChallengeCount, coursName } = props;

  const percentageCompleted: number =
    completedChallengeCount && challengeCount
      ? Math.floor((completedChallengeCount / challengeCount) * 100)
      : 0;

  return (
    <>
      <div className='course-progress-block bg-secondary p-2'>
        <small className='text-love-light fw-bold'>Cours</small>
        <div className='course-progress-header'>
          <div className='title-course-progress'>
            <h3 className='display-inlin'>{coursName ? coursName : ''}</h3>
          </div>
        </div>
        <div>
          <small className='fw-bold'>
            {`${percentageCompleted}% ${
              percentageCompleted === 0 || percentageCompleted === 1
                ? 'achevé'
                : 'achevés'
            }`}
            <br />
          </small>
          <ProgressBar now={percentageCompleted} animated={'true'} />
        </div>
      </div>
    </>
  );
}

CourseProgressBar.displayName = 'CourseProgressBar';

export default CourseProgressBar;
