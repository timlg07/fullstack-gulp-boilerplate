const gulp = require('gulp');

gulp.task('build',
  gulp.series(
    'styles',
    gulp.parallel(
      'webpack:once',
      'images'
    )
  )
);