$(document).ready(function() {
	$('#layerslider').layerSlider({
    	slideDelay: 3000,
    	pauseOnHover: false,
    	skin: false,
		showCircleTimer: false,
		responsive : true
	});
});

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
      autoPlay: 3000, 
      items : 5,
      navigation : false,
      pagination : false,
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 3],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 5]
      ],
  });
});

$(document).ready(function() {
  $("#owl-demo2").owlCarousel({
      autoPlay: 3000, 
      items : 5,
      navigation : false,
      pagination : false,
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 2],
        [700, 3],
        [1000, 4],
        [1200, 5],
        [1400, 5],
        [1600, 5]
      ],
  });
});

$(document).ready(function() {
  var text = $('h1.title.t-tour').text();
  $('input.namet-t').val(text);
  $('input.namet-t').prop('readonly', true);
  var text = $('.hihi-gia').text();
  $('input.gia-t').val(text);
  $('input.gia-t').prop('readonly', true);
});