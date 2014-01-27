module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '',
          src: ['*.scss'],
          dest: 'release/',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      minify: {
        options:{
          report:'gzip'
        },
        expand: true,
        cwd: 'release/',
        src: ['*.css', '!*.min.css'],
        dest: 'release/',
        ext: '.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'cssmin']);
};