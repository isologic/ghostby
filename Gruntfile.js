(function(){
"use strict";

	module.exports = function(grunt) {

		require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

		grunt.initConfig({
			// Set up Dirs
			meta: {
				bowerDir: 'assets/bower',
				cssDir: 'assets/css',
				jsDir: 'assets/js',
				sassDir: 'assets/sass'
			},

			concat: {
				options: {
					stripBanners: true,
					separator: ';'
				},
				build: {
					src: [
						'<%= meta.bowerDir %>/gumby/js/plugins.js'        // Placeholder jQuery plugin, found in source JS dir
						// '<%= meta.bowerDir %>/ more / bower / plugins.of.your.choice.js'
					],
					dest: '<%= meta.jsDir %>/components.js'
				}
			},

			uglify: {
				options: {
					compress: true,
					mangle: true,
					report: 'min',
					banner: '/*! <%= pkg.name %> - <%= pkg.version %>\n' +
									' <%= pkg.author %>\n' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				build: {
					files: {
						'<%= meta.jsDir %>/app.min.js': [
							'<%= meta.bowerDir %>/gumby/js/main.js',      // Gumby's jQuery init functions, found in source JS dir
							'<%= meta.jsDir %>/app.js'
						]
					}
				}
			},

			compass: {
				build: {
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
		grunt.registerTask('build', [
			'concat',
			'uglify',
			'compass'
		]);
		grunt.registerTask('default', ['watch']);

	};

})();
