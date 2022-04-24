var gulp = require('gulp');
var config = require('../config');
var watch = require('gulp-watch');

var watchConfig = config.watch;

gulp.task('watch', function (done) {
  watch(watchConfig.styles, gulp.series('styles'));
  watch(watchConfig.images, gulp.series('images'));
  watch(watchConfig.livereload).on('change', browserSync.reload);

  done();
});
