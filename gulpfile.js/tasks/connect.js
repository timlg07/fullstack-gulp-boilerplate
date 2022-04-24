const gulp    = require('gulp');
const config  = require('../config').server;
const connect = require('gulp-connect-php');

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
