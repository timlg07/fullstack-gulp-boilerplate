const gulp = require('gulp');
const del = require('del');
const config = require('../config').clean;

/* Clean the public directory */
gulp.task('clean', function () {
  return del(config.all);
});
