import React from 'react';
import CourseCard from '../../components/CourseCard/course-card';
import PathCard from '../../components/PathCard/path-card';
import { RavenCourse, MoodleCourse } from '../show-courses';
import { renderCourseCardSkeletons } from '../../components/helpers';
import PhBookBookmark from '../../assets/images/ph-book-bookmark-thin.svg';
import awsLogo from '../../assets/images/aws-logo.png';
import {
  convertTime,
  convertTimestampToTime,
  formatDescription
} from '../../utils/allFunctions';
import envData from '../../../../config/env.json';
import { allQuery } from '../../utils/routes';
import { ProgramationCourses } from '../../redux/prop-types';
// Unification des types pour les cours
type Course = RavenCourse | MoodleCourse | ProgramationCourses;

interface CourseListProps {
  courses: Course[]; // Tableau contenant différents types de cours
}
const { moodleBaseUrl } = envData;

const SwhowIaCourses: React.FC<CourseListProps> = ({ courses }) => {
  // Filtrer les cours pour n'afficher que ceux de l'IA
  return (
    <>
      {courses.length === 0
        ? renderCourseCardSkeletons(6)
        : courses.map((course, index) => {
            {
              if ('visible' in course) {
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

export default SwhowIaCourses;
