module.exports = {
	minify: {
		expand: true,
		cwd: '../www/css/',
		src: ['*.css', '!*.min.css'],
		dest: '../www/css/',
		ext: '.min.css'
	}
}