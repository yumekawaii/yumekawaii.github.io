function bounce() {
	var bounce = new Bounce();
	bounce
		.scale({
			from: { x: 0.5, y: 1 },
			to: { x: 1, y: 1 },
			easing: "bounce",
			duration: 2000,
			delay: 0,
			stiffness: 1,
			bounces: 6
		})
		.scale({
			from: { x: 1, y: 0.5 },
			to: { x: 1, y: 1 },
			easing: "bounce",
			duration: 3000,
			delay: 0,
			bounces: 6
		})
		.applyTo(document.querySelectorAll(".top-logo"));
}

$(function () {
	$(".top03").on("mousemove", function (e) {
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left;
		var y = e.clientY - rect.top;

		var posx = x / rect.width - 0.5;
		var posy = y / rect.height - 0.5;

		$(".top03").css("left", posx * -80);
		$(".top02").css("left", posx * -5);
		$(".top03").css("top", posy * -40);
		$(".top02").css("top", posy * -5);
	});
	$(".top-logo").show();

	$(".top-logo").on("click", function () {
		bounce();
	});

	bounce();
});