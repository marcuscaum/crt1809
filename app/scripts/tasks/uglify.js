module.exports = {
	options: {
	  mangle: false
	},
	my_target: {
	  files: {
	    '../www/js/scripts.js': ['scripts/scripts.js'],
	    '../www/js/lib/jquery-1.11.0.min.js': ['scripts/lib/jquery-1.11.0.min.js'],
	    '../www/js/lib/ios-slider.min.js': ['scripts/lib/ios-slider.min.js'],
	    '../www/js/lib/jquery.easing-1.3.js': ['scripts/lib/jquery.easing-1.3.js'],
	    '../www/js/lib/jquery.marquee.min.js': ['scripts/lib/jquery.marquee.min.js'],
	    '../www/js/lib/jquery.nicescroll.min.js': ['scripts/lib/jquery.nicescroll.min.js'],
	  }
	}
}