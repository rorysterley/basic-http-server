'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    express: {
        options: {
          script: './http_server.js'
        }
      },
    jshint: {
      options:{
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true
        }
      },
    src: ['Gruntfile.js',
          'test/**/*.js',
          'http_server.js']
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'express', 'simplemocha:all']);
  grunt.registerTask('default', ['test']);
};


