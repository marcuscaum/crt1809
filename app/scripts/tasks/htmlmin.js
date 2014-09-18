module.exports = {
	dist: {                                      // Target
		options: {                                 // Target options
			removeComments: true,
			collapseWhitespace: true
		},
		files: {                                   // Dictionary of files
			'../www/index.html': 'index.html' , // 'destination': 'source'
		}
	}
}