$(document).ready(function() {
	$('#foo').styleListener({
		styles: ['visibility', 'width', 'height', 'color', 'font-size'],
		changed: function(style, newValue, oldValue, element) {
			alert(style + ' changed from ' + oldValue + ' to ' + newValue);
		}
	});
	var element = $('#foo'), visible = true;
	$('#visibility').click(function() {
		element.css('visibility', visible ? 'hidden' : 'visible');
		visible = !visible;
	});
	$('#width').click(function() {
        element.css('width', (100 + Math.floor((Math.random() * 250))) + 'px');
    });
	$('#height').click(function() {
        element.css('height', (20 + Math.floor((Math.random() * 80))) + 'px');
    });
	$('#color').click(function() {
		var chars = '0123456789ABCDEF', hex = '', i = 0;
		for(i = 0; i < 6; i++) hex += chars[Math.floor(Math.random() * 16)];
        element.css('color', '#' + hex);
    });
	$('#font').click(function() {
        element.css('font-size', (12 + Math.floor((Math.random() * 30))) + 'px');
    });
	$('#reset').click(function() {
		element.attr('style', '');
	});
});