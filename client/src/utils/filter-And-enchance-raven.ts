import { RavenCourse } from '../client-only-routes/show-courses';

export function filterAndEnhanceCourses(courses: RavenCourse[]): RavenCourse[] {
  if (!courses || courses.length === 0) {
    console.error('Erreur : le serveur a renvoyé un tableau vide.');
    return [];
  }

  return courses
    .filter(course =>
      course.category?.some(cat =>
        cat.tags?.some(tag => /English|French/.test(tag.title))
      )
    )
    .map(course => ({
      ...course,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skill_level:
        course.category?.find(cat =>
          cat.tags?.some(tag => tag.title === 'Skill Level')
        )?.tags?.[0]?.title || 'Fundamental',
      roles: course.category?.[1]?.tags?.[0]?.title || ''
    }));
}
