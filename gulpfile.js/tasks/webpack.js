var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var config  = require('../config').webpack;
var webpack = require('webpack-stream');
var named = require('vinyl-named');

var webpackConfig = require('../../webpack.config.js');

gulp.task('webpack:once', function () {
  webpackConfig.watch = false;

  return gulp.src( config.sources )
    .pipe( plumber() )
    .pipe( named() )
    .pipe( webpack( webpackConfig ) )
    .pipe( gulp.dest( config.dest ) );
});

gulp.task('webpack:watch', function () {
  webpackConfig.watch   = true;
  webpackConfig.devtool = 'cheap-module-source-map';

  return gulp.src( config.sources )
    .pipe( plumber() )
    .pipe( named() )
    .pipe( webpack( webpackConfig ) )
    .pipe( gulp.dest( config.dest ) );
});
