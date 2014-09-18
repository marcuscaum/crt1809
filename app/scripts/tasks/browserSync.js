module.exports = {
 	default_options: {
        bsFiles: {
			src: [
				"../www/css/*.css",
				"../www/js/*.js",
				"../www/*.html"
			]
   		},
        options: {
			watchTask: true,
			server:{
				baseDir: "../www/"
			}
        }
 	}
}