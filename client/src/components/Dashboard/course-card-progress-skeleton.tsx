import React from 'react';

import './dashboard.css';

export function CoursCardProgressSkeleton(): JSX.Element {
  return (
    <>
      <div className='cours-card-progress bg-light p-4 standard-radius-5'>
        <small className='text-love-light fw-bold'>
          Cours
          <br />
        </small>
        <div className='cours-card-content'>
          <div className='cours-card-content-left'>
            <div className='display-inline skeleton'></div>
          </div>
          <div className='cours-card-content-right hide-on-mobile'>
            <small></small>
          </div>
        </div>
        <div>
          <small className='fw-bold skeleton'></small>
          <div className='progress-placeholder skeleton'></div>
        </div>
        <div className='show-on-mobile'>
          <small></small>
        </div>
      </div>
    </>
  );
}

CoursCardProgressSkeleton.displayName = 'CoursCardProgressSkeleton';

export default CoursCardProgressSkeleton;
