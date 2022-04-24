/* ---------------------------------------
    CONFIG
   --------------------------------------- */

var localConfig = require('./local.config.js');

// Project paths
var src     = './source/';
var vendor  = './source/vendor/';
var dist    = './public/';

var config = {
  styles: {
    source: src+'styles/styles.scss',
    dest: dist+'assets/css/',
    autoprefixer: {
      browsers: ['> 5%', 'last 2 versions'],
      cascade: false
    }
  },

  jshint: {
    source: [
      src+'scripts/*.js',
      '!**/vendor/**'
    ]
  },

  images: {
    source: src+'images/**/*',
    dest: dist+'assets/img/'
  },

  modernizr: {
    parameters: {
      options: ['setClasses','html5printshiv','fnBind']
    },
    source: dist+'assets/css/*.css',
    dest: dist+'assets/js'
  },

  server: {
    base: dist,
    port: 8080,
    host: 'localhost',
    surfacePort: 9000,
    configCallback: function _configCallback(type, collection) {
      console.log(collection);
      if (type === connect.OPTIONS_SPAWN_OBJ) {
        collection.env = Object.assign({
          MY_CUSTOM_ENV_VAR: "env_var_value"
        }, process.env);

        return collection;
      }
    }
  },

  clean: {
    all: [
      './.sass-cache',
      dist+'assets/js',
      dist+'assets/img',
      dist+'assets/css'
    ]
  },

  webpack: {
    sources: ['./source/scripts/script.js'],
    dest: './public/assets/js'
  },

  watch: {
    livereload: dist + '**/*.{js,html,php}',
    styles: src + 'styles/**/*.scss',
    styles_output: dist + '**/*.css',
    images: src + 'images/**/*.*',
  }
};

module.exports = Object.assign(config, localConfig);
