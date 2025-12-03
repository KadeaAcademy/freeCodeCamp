import React from 'react';
import CourseCard from '../../components/CourseCard/course-card';
import PathCard from '../../components/PathCard/path-card';
import { RavenCourse, MoodleCourse } from '../show-courses';
import { renderCourseCardSkeletons } from '../../components/helpers';
import awsLogo from '../../assets/images/aws-logo.png';
import { convertTime, formatDescription } from '../../utils/allFunctions';
import { allQuery } from '../../utils/routes';
import { ProgramationCourses } from '../../redux/prop-types';

// Unification des types pour les cours
type Course = RavenCourse | MoodleCourse | ProgramationCourses;

interface CourseListProps {
  courses: Course[]; // Tableau contenant différents types de cours
}

const ShowOnlyRavenCouses: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <>
      {courses.length === 0
        ? renderCourseCardSkeletons(6)
        : courses.map((course, index) => {
            if ('launch_url' in course) {
              const courseTyped = course;
              const firstCategory = courseTyped.category?.[0];
              const language = firstCategory?.tags?.[0]?.title || 'Unknown';

              if (courseTyped.long_description) {
                return (
                  <PathCard
                    key={courseTyped.name}
                    language={language}
                    icon={awsLogo}
                    isAvailable={true}
                    title={`${index + 1}. ${courseTyped.name}`}
                    buttonText='Suivre le parcours'
                    link={courseTyped.launch_url}
                    description={formatDescription(
                      courseTyped.long_description
                    )}
                    duration={convertTime(courseTyped.duration)}
                    level={
                      courseTyped.skill_level === 'Fundamental'
                        ? allQuery.value.level.debutant
                        : ''
                    }
                  />
                );
              } else {
                return (
                  <CourseCard
                    key={index.toString()}
                    level={
                      courseTyped.skill_level === 'Fundamental'
                        ? allQuery.value.level.debutant
                        : ''
                    }
                    language={language}
                    icon={awsLogo}
                    isAvailable={true}
                    title={`${index + 1}. ${courseTyped.name}`}
                    buttonText='Suivre le cours'
                    link={courseTyped.launch_url}
                    description={formatDescription(
                      courseTyped.short_description
                    )}
                    duration={convertTime(courseTyped.duration)}
                  />
                );
              }
            }
          })}
    </>
  );
};

export default ShowOnlyRavenCouses;
