import React from 'react';
import { RavenCourse, MoodleCourse } from '../show-courses';
import { renderCourseCardSkeletons } from '../../components/helpers';
import { ProgramationCourses } from '../../redux/prop-types';
import SwhowIaCourses from './show-ia-courses';
import ShowOnlyRavenCouses from './show-only-raven-courses';
import ShowOnlyMoodleCourses from './show-only-moodle-courses';
import ShowAllProgrammationSourcesCourses from './show-all-sources-programmation-courses';
import ShowAllBureautiqueSourcesCourses from './show-all-sources-courses-bureautiques';

// Unification des types pour les cours
type Course = RavenCourse | MoodleCourse | ProgramationCourses;

interface CourseListProps {
  courses: Course[]; // Tableau contenant différents types de cours
  valueOfUrl: string; // Url de la catégorie pour filtrer les cours
}

const CourseList: React.FC<CourseListProps> = ({ courses, valueOfUrl }) => {
  if (courses.length === 0) {
    return <div>{renderCourseCardSkeletons(6)}</div>;
  }
  // Gestion des cours de Programmation
  if (valueOfUrl === 'programmation') {
    return <ShowAllProgrammationSourcesCourses courses={courses} />;
  }
  // Gestion de tous les  cours Amazon Web Services (RavenCourses) sans distinction du domaine
  if (valueOfUrl === 'amazon web service') {
    return <ShowOnlyRavenCouses courses={courses} />;
  }
  // Gestion des cours Intelligence Artificielle
  if (
    valueOfUrl === 'Intelligence%20 %20artificielle' ||
    valueOfUrl === 'intelligence artificielle'
  ) {
    return <SwhowIaCourses courses={courses} />;
  }
  // Gestion des cours Bureauatique
  if (valueOfUrl === 'Bureautique' || valueOfUrl === 'bureautique') {
    return <ShowAllBureautiqueSourcesCourses courses={courses} />;
  }
  // Gestion des cours Moodle sans distinction du domaine
  return <ShowOnlyMoodleCourses courses={courses} />;
};

export default CourseList;
