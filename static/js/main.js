$(function() {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	$('a[data-fancybox-group=gallery-image]').fancybox({
		nextEffect: 'fade',
		prevEffect: 'fade',
		fitToView: true,
		helpers : {
			title : {
				type : 'inside'
			}
		},
		afterShow:function() {
			_gaq.push(['_trackEvent','Gallery','View', this.title]);
		}
	});
});