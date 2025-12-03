import { ProgramationCourses, ResponseRaven } from '../redux/prop-types';
import { get } from './ajax';

export async function getPopularKadeaCourses() {
  try {
    const response = await get<ResponseRaven>('/get-kadea-courses');

    if (!response.success) {
      console.log('Error fetching courses:', response.error);
      throw new Error(response.error);
    }

    const courses = response.data as ProgramationCourses[];

    return courses.filter(course =>
      course.enrolementCount ? course.enrolementCount > 0 : false
    );
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}
