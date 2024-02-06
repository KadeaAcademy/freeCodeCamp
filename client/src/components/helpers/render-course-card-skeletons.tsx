import React from 'react';
import CourseCardSkeleton from '../CourseCard/course-card-skeleton';

const renderCourseCardSkeletons = (skeletonQuantity: number): JSX.Element[] => {
  const content: JSX.Element[] = [];
  for (let i = 0; i < skeletonQuantity; i++) {
    const item = i;
    content.push(<CourseCardSkeleton key={item} />);
  }
  return content;
};

// renderCourseCardSkeletons.displayName = 'renderCourseCardSkeletons';
export default renderCourseCardSkeletons;
