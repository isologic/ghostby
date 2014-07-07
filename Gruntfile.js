(function(){
"use strict";

	module.exports = function(grunt) {

		require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

		grunt.initConfig({
			// Set up Dirs
			meta: {
				bowerDir: 'assets/bower',
				cssDir: 'assets/css'
				jsDir: 'assets/js',
				sassDir: 'assets/sass',
			},

			uglify: {
				options: {
					compress: true,
					mangle: true,
					report: 'min',
					banner: '/*! <%= pkg.name %> -  <%= pkg.author %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},

				build: {
					files: {
						"<%= meta.jsDir %>/app.min.js": "<%= meta.jsDir %>/app.js"
					}
				}
			},

			compass: {
				dist: {
					options: {
						config: "config.rb"
					}
				}
			},

			watch: {
				options: {
					livereload: true
				},
				css: {
					files: ['<%= meta.sassDir %>/**/*.{sass,scss}'],
					tasks: ['compass']
				},
				js: {
					files: ['<%= meta.jsDir %>/**/*.js'],
					tasks: ['jshint', 'uglify']
				},
				html: {
					files: ['**/*.hbs']
				},
				configFiles: {
					files: [ 'Gruntfile.js', 'config.rb' ]
				}
			}

		});

		grunt.registerTask('default', ['watch']);

	};

})();
