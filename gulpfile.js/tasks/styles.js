//
// Compile using SASS, add Autoprefixer and build two versions: normal and minified
//

const gulp          = require('gulp');
const plumber       = require('gulp-plumber');
const config        = require('../config').styles;
const autoprefixer  = require('gulp-autoprefixer');
const cleanCSS      = require('gulp-clean-css');
const sass          = require('gulp-sass')(require('node-sass'));
const rename        = require('gulp-rename');

function handleError(err) {
  console.log(err.name, ' in ', err.plugin, ': ', err.message);
  this.emit('end');
}

gulp.task('styles', function () {
  return gulp.src( config.source )
    .pipe ( plumber() )

    // normal version
    .pipe( sass() ).on('error', handleError)
    .pipe( autoprefixer() )
    .pipe( gulp.dest( config.dest ) )
    .pipe( browserSync.stream() )

    // minified version
    .pipe( rename('styles.min.css') )
    .pipe( cleanCSS() )
    .pipe( gulp.dest( config.dest ) );
});
