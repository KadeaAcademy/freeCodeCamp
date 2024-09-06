import React from 'react';

import CoursCardProgressSkeleton from '../Dashboard/course-card-progress-skeleton';

const renderCourseProgressSkeletons = (
  skeletonQuantity: number
): JSX.Element[] => {
  const content: JSX.Element[] = [];
  for (let i = 0; i < skeletonQuantity; i++) {
    const item = i;
    content.push(<CoursCardProgressSkeleton key={item} />);
  }
  return content;
};

// renderCourseCardSkeletons.displayName = 'renderCourseCardSkeletons';
export default renderCourseProgressSkeletons;
