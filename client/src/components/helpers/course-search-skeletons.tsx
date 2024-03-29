import React from 'react';

const CourseSearchSkeletons = (): JSX.Element => {
  return (
    <div className=' card-outlin-border standard-radius-5'>
      <div className='card-course-detail-item'>
        <div className='skeleton-title'></div>
      </div>
      <div className='card-course-detail-item  flexible'>
        <div className='skeleton-content'></div>
      </div>
    </div>
  );
};

// renderCourseCardSkeletons.displayName = 'renderCourseCardSkeletons';
export default CourseSearchSkeletons;
