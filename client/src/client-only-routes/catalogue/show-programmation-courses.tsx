import React from 'react';
import CourseCard from '../../components/CourseCard/course-card';
import { RavenCourse, MoodleCourse } from '../show-courses';
import { renderCourseCardSkeletons } from '../../components/helpers';
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import { ProgramationCourses } from '../../redux/prop-types';

// Unification des types pour les cours
type Course = RavenCourse | MoodleCourse | ProgramationCourses;

interface CourseListProps {
  courses: Course[]; // Tableau contenant différents types de cours
}

const ShowProgrammationCourses: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <>
      {courses.length === 0
        ? renderCourseCardSkeletons(6)
        : courses.map((course, index) => {
            // Gestion des cours de Programmation
            if ('specification' in course) {
              const courseList = course;
              return (
                <CourseCard
                  key={index}
                  level={courseList.level}
                  language={courseList.language}
                  icon={
                    courseList.sponsorIcon === 'AlgoIcon'
                      ? AlgoIcon
                      : LaediesActIcon
                  }
                  alt={courseList.alt}
                  isAvailable={courseList.isAvailable}
                  title={courseList.title}
                  buttonText='Suivre le cours'
                  link={courseList.link}
                  description={courseList.description}
                />
              );
            }
          })}
    </>
  );
};

export default ShowProgrammationCourses;
