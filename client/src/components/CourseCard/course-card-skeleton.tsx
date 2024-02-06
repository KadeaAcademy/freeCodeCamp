import React from 'react';
import './course-card.css';

const CourseCardSkeleton = (): JSX.Element => {
  return (
    <div className='card-course-detail-back standard-radius-5 card-outlin-border bg-light'>
      <div className='card-course-detail-unit position-relative'>
        <div className='card-outlin-border-skeleton bg-light standard-radius-5'>
          <div className='skeleton-badg'></div>

          <div className='card-course-detail-header'>
            <div className='skeleton-logo-icon push hide-small'></div>
          </div>
          <div className='card-course-detail-item'>
            <div className='skeleton-title'></div>
          </div>
          <div className='card-course-detail-item  flexible'>
            <div className='skeleton-content'></div>
            <div className='skeleton-content'></div>
            <div className='skeleton-content'></div>
          </div>
          <div className='card-course-detail-footer'>
            <div className='push skeleton-link'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCardSkeleton.displayName = 'CourseCardSkeleton';
export default CourseCardSkeleton;
