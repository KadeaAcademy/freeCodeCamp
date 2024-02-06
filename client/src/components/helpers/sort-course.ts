import {
  MoodleCourse,
  MoodleCoursesCatalogue
} from '../../client-only-routes/show-courses';

const sortCourses = (splitCourses: MoodleCoursesCatalogue | null) => {
  splitCourses?.result.map(page => {
    page.sort(
      (course1: MoodleCourse, course2: MoodleCourse) =>
        course1.timecreated - course2.timecreated
    );
  });
  return splitCourses;
};

export default sortCourses;
