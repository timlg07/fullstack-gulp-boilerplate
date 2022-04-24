const gulp = require('gulp');

gulp.task('default',
  gulp.series(
    'clean',
    'build',
    gulp.parallel(
      gulp.series('watch'),
      'connect',
      'webpack:watch'
    )
  )
);