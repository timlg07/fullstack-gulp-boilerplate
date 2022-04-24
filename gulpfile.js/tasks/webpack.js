const gulp = require('gulp');
const plumber = require('gulp-plumber');
const config = require('../config').webpack;
const webpack = require('webpack-stream');
const named = require('vinyl-named');

const webpackConfig = require('../../webpack.config.js');

gulp.task('webpack:once', function () {
  webpackConfig.watch = false;

  return gulp.src(config.sources)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.dest));
});

gulp.task('webpack:watch', function () {
  webpackConfig.watch = true;
  webpackConfig.devtool = 'cheap-module-source-map';

  return gulp.src(config.sources)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.dest));
});
