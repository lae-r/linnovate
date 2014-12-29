(function ($) {

    $.extend({
        add2cart: function (source_id, target_id, callback, background) {
			//console.log('source_id: '+source_id);
			//console.log('source_id: '+target_id);
			//alert(background);
			//alert('background: url("'+background+'")');
			//background = '/App_Themes/yashir4u_he-IL/M/unavailable.jpg';
			var source = $('#' + source_id);
			var target = $('#' + target_id);

			var shadow = $('#' + source_id + '_shadow');
			/*if (!shadow.attr('id')) {
				$('body').prepend('<div id="' + source.attr('id') + '_shadow" style="display: none;  border: none; position: static; top: 0px; z-index: 100000;">&nbsp;</div>');
				var shadow = $('#' + source.attr('id') + '_shadow');
			}*/
			
			if (!shadow.attr('id')) {
				$('body').prepend('<img id="' + source.attr('id') + '_shadow" style="display: none;  border: none; position: static; top: 0px; z-index: 100000;" />');
				var shadow = $('#' + source.attr('id') + '_shadow');
			}

			if (!shadow) { alert('Cannot create the shadow div'); }
			$("#" + source_id + "_shadow").attr("class", "shadowed");
			shadow.width(source.css('width')).height(source.css('height')).css('top', source.offset().top).css('left', source.offset().left).css('opacity', 1).show();
			shadow.css('position', 'absolute');
			//shadow.css({'background': 'url("'+background+'") no-repeat center'});
			shadow.attr('src', background);
			jQuery.easing.def = "easeOutCubic";
			
			shadow.animate({
                width: 25, //target.innerWidth() / 2,
                height: 31, //target.innerHeight() / 2,
                top: target.offset().top+21,
                left: 23, //target.offset().left + 13,
                opacity: 0.2
            }, {
                duration: 1800
            }).animate({
			    opacity: 0
			}, {
			    duration: 800, complete: function () {
			        $(".floatingCartButton").attr("id", "link_cart");
			        $('#' + source_id + "_shadow").remove();
			    }
			});
            $(".floatingCartButton").attr("id", "link_cart");
        }
    });
})(jQuery);