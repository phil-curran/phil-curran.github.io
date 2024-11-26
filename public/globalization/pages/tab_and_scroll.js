$('a[data-toggle="tab"]').on('shown.bs.tab',
	function(event) {
		var $relatedTarget, $target;

		if (event.relatedTarget != null) {
			$relatedTarget = $(event.relatedTarget);
			$('a[data-toggle="' +
				$relatedTarget.attr('data-toggle') +
				'"][href="' +
				$relatedTarget.attr('href') +
				'"]').parent('li').removeClass('active');
		}

		if (event.target != null) {
			$target = $(event.target);
			$('a[data-toggle="' +
				$target.attr('data-toggle') +
				'"][href="' +
				$target.attr('href') +
				'"]').parent('li').addClass('active');
		}

		window.scrollTo(0,0);
	}
);