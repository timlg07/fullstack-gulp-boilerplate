const gulp = require('gulp');
const config = require('../config').images;
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');

gulp.task('images:optimize', function () {
  return gulp.src(config.source)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.dest));
});

// gulp.task('images:webp', function () {
//   return gulp.src( config.source )
//     .pipe( webp({
//       preset: 'photo',
//       quality: 90,
//       method: 6
//     }) )
//     .pipe( gulp.dest(config.dest) );
// });

gulp.task('images', gulp.parallel('images:optimize'));
