import React from 'react';
import CourseCard from '../../components/CourseCard/course-card';
import { RavenCourse, MoodleCourse } from '../show-courses';
import { renderCourseCardSkeletons } from '../../components/helpers';
import PhBookBookmark from '../../assets/images/ph-book-bookmark-thin.svg';

import { convertTimestampToTime } from '../../utils/allFunctions';
import envData from '../../../../config/env.json';
import { ProgramationCourses } from '../../redux/prop-types';

// Unification des types pour les cours
type Course = RavenCourse | MoodleCourse | ProgramationCourses;

interface CourseListProps {
  courses: Course[]; // Tableau contenant différents types de cours
}
const { moodleBaseUrl } = envData;

const ShowOnlyMoodleCourses: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <>
      {courses.length === 0
        ? renderCourseCardSkeletons(6)
        : courses.map((course, index) => {
            // Gestion des cours Moodle
            if ('format' in course) {
              const courseTyped = course;
              return (
                <CourseCard
                  key={index}
                  language={courseTyped.langue}
                  level={courseTyped.level}
                  icon={PhBookBookmark}
                  isAvailable={courseTyped.visible === 1}
                  title={courseTyped.displayname}
                  buttonText='Suivre le cours'
                  link={`${moodleBaseUrl}/course/view.php?id=${courseTyped.id}`}
                  description={courseTyped.summary}
                  duration={convertTimestampToTime(courseTyped.duration)}
                />
              );
            }
          })}
    </>
  );
};

export default ShowOnlyMoodleCourses;
