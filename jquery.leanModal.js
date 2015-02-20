(function($){

	$.fn.extend({

		leanModal: function(options) {

			var defaults = {
				top: 100,
				overlay: 0.5,
				closeButton: null,
				closeClickOverlay: true,

				open: false,
				close: false,
			}

			options = $.extend(defaults, options);

			if (options.close) {
				close_modal(this);
			}

			if ($("#lean_overlay").size() == 0) {
				var overlay_tag = $("<div id='lean_overlay'></div>");
				$("body").append(overlay_tag);
			}

			if (options.open) {

				var modal = this;

				init_modal(modal, options);

				modal.fadeTo(200, 1);

				return this;

			} else {

				return this.each(function() {

					$(this).click(function(e) {

						var modal_id = $(this).attr("href");
						var modal = $(modal_id);

						init_modal(modal, options);

						modal.fadeTo(200, 1);

						e.preventDefault();

					});

				});

			}

			function init_modal(modal, options) {

				var o = options;

				$("#lean_overlay").click(function() {
					if (o.closeClickOverlay) {
						close_modal(modal);
					}
				});

				$(o.closeButton).click(function() {
					close_modal(modal);
				});

				var modal_height = modal.outerHeight();
				var modal_width = modal.outerWidth();

				$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });

				$('#lean_overlay').fadeTo(200, o.overlay);

				modal.css({

					'display' : 'block',
					'position' : 'fixed',
					'opacity' : 0,
					'z-index': 11000,
					'left' : 50 + '%',
					'margin-left' : -(modal_width/2) + "px",
					'top' : o.top + "px"

				});
			}

			function close_modal(modal) {

				$("#lean_overlay").fadeOut(200);

				modal.css({ 'display' : 'none' });

			}

		}
	});

})(jQuery);