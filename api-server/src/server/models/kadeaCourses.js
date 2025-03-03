'use strict';

module.exports = function (KadeaCourse) {
  KadeaCourse.veryfy = async function (courseId, cb) {
    const course = await KadeaCourse.findById(courseId);
    if (!course) {
      return cb(new Error('Course not found'));
    }
    return cb(null, course);
  };
};
