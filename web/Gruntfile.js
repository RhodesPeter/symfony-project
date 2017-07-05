module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
        options: {
          sourcemap: 'none'
        },
				files: {
					'assets/css/site.css' : 'assets/css/site.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'assets/css/**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
