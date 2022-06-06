const gulp = require('gulp');
const config = require('../config');
const watch = require('gulp-watch');

const watchConfig = config.watch;

gulp.task('watch', function (done) {
  watch(watchConfig.styles, gulp.series('styles'));
  watch(watchConfig.images, gulp.series('images'));
  watch(watchConfig.livereload).on('change', browserSync.reload);

  done();
});
