requirejs.config({
	baseUrl: 'scripts/vendor',
	paths: {
		$: 'jquery-1.11.2.min',
		stick_in_parent: 'jquery.sticky-kit.min'
	}
});

requirejs(['../pdcnt/get_correct_images']);