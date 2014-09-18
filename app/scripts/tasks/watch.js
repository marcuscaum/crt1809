module.exports = {
	less: {
		files: ["less/*.less", "less/*.css", "*.html", "scripts/*.js", "templates/*.html", "../www/css/tabSlideBox.css"],
		tasks: [
		 "less",
		 "cssmin",
		 "htmlmin",
		 "uglify",
		 "imagemin"
		]
	}
}