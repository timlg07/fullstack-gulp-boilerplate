var gulp    = require('gulp');
var config  = require('../config').server;
var connect = require('gulp-connect-php');

global.browserSync = require('browser-sync');

// Static server
gulp.task('connect', function() {
  connect.server(config, function (){
    browserSync({
      port: config.surfacePort,
      proxy: config.host + ':' + config.port,
      notify: {
        styles: {
          top: 'auto',
          bottom: '0'
        }
      }
    });
  });
});
