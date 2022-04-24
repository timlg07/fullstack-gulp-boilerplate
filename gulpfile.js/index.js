/* ---------------------------------------
    CONFIG
   --------------------------------------- */

const requireDir = require('require-dir');
const gulp = require('gulp');

requireDir('./tasks');

gulp.task('build', 
  gulp.series('styles', 
    gulp.parallel('webpack:once','images')
  )
);

gulp.task('default', 
  gulp.series('styles', 
    gulp.parallel('webpack:once','images')
  )
);