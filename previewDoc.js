$(document).ready(function () {

	$('.stamp-draggable').draggable({
		containment: $('body'),
		drag: function () {
			var offset = $(this).position();
			var xPos = offset.left;
			var yPos = offset.top;
			console.log(xPos, yPos);
		},
		stop: function () {
			var finalOffset = $(this).offset();
			var finalxPos = finalOffset.left;
			var finalyPos = finalOffset.top;

			console.log(finalxPos, finalyPos, "final");
		},
		revert: 'invalid',
		stack: ".stamp-draggable",
		helper: 'original'
	});

	$('.stamp-droppable').droppable({
		accept: '.stamp-draggable',
		hoverClass: 'hovered',
		tolerance: 'pointer',
		drop: function (ev, ui) {
			var droppable = $(this);
			var draggable = ui.draggable;
			var drag = $('.droppable').has(ui.draggable).length ? draggable : draggable.clone().draggable({
			  revert: "invalid",
			  stack: ".stamp-draggable",
			  helper: 'original'
			});
			drag.appendTo(droppable);		
		},
		over: function () {
			$(this).animate({
				'border-color': 'green',
			}, 500);
			$('.stamp-droppable').draggable('option', 'containment', $(this));
		}
	});
});