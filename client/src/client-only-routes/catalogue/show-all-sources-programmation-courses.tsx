import React from 'react';
import CourseCard from '../../components/CourseCard/course-card';
import PathCard from '../../components/PathCard/path-card';
import { RavenCourse, MoodleCourse } from '../show-courses';
import { renderCourseCardSkeletons } from '../../components/helpers';
import awsLogo from '../../assets/images/aws-logo.png';
import { convertTime, formatDescription } from '../../utils/allFunctions';
import { allQuery } from '../../utils/routes';
// Unification des types pour les cours
type Course = RavenCourse | MoodleCourse | ProgramationCourses;
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import { ProgramationCourses } from '../../redux/prop-types';

interface CourseListProps {
  courses: Course[];
}

const ShowAllProgrammationSourcesCourses: React.FC<CourseListProps> = ({
  courses
}) => {
  // Filtrer les cours pour n'afficher que ceux de l'IA
  return (
    <>
      {courses.length === 0
        ? renderCourseCardSkeletons(6)
        : courses.map((course, index) => {
            {
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
              const courseTyped = course as RavenCourse;
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

export default ShowAllProgrammationSourcesCourses;
