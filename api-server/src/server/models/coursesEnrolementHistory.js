'use strict';

module.exports = function (EnrolementHistory) {
  EnrolementHistory.veryfy = async function (courseId, cb) {
    const course = await EnrolementHistory.findById(courseId);
    if (!course) {
      return cb(new Error('Course not found'));
    }
    return cb(null, course);
  };
};
