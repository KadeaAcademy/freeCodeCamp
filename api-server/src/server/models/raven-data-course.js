'use strict';

module.exports = function (Ravendatacourse) {
  Ravendatacourse.veryfy = async function (courseId, cb) {
    const course = await Ravendatacourse.findById(courseId);
    if (!course) {
      return cb(new Error('Course not found'));
    }
    return cb(null, course);
  };
};
