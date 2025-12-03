'use strict';

module.exports = function (RavenCourse) {
  RavenCourse.veryfy = async function (courseId, cb) {
    const course = await RavenCourse.findById(courseId);
    if (!course) {
      return cb(new Error('Course not found'));
    }
    return cb(null, course);
  };
};
