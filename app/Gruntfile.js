function config(name){
	return require('./scripts/tasks/' + name + '.js');
}

module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less: config('less'),
		cmq: config('cmq'),
		cssmin: config('cssmin'),
		browserSync: config('browserSync'),
		watch: config('watch'),
		uglify: config('uglify'),
		htmlmin: config('htmlmin'),
		imagemin: config('imagemin')
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['less', 'cssmin','uglify','htmlmin','imagemin', 'browserSync', 'watch']);


}