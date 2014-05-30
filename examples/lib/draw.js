(function() {
	'use strict';

	var canvas, con2d;

	var Draw = {
		init: function (element) {
			canvas = element;
			con2d = canvas.getContext('2d');
		},

		clear: function () {
			con2d.clearRect(0, 0, canvas.width, canvas.height);
		},

		circle: function (x, y, r) {
			con2d.beginPath();
			con2d.arc(x, y, r, 0, 2 * Math.PI, false);
			con2d.fill();
			con2d.stroke();
		},

		line: function (x1, y1, x2, y2) {
			con2d.beginPath();
			con2d.moveTo(x1, y1);
			con2d.lineTo(x2, y2);
			con2d.stroke();
		},

		point: function (x, y) {
			con2d.fillRect(x - 1, y - 1, 3, 3);
		},

		path: function (points) {
			if (points.length > 0) {
				con2d.beginPath();
				con2d.moveTo(points[0].x, points[0].y);
				for (var i = 1; i < points.length; i++) {
					con2d.lineTo(points[i].x, points[i].y);
					con2d.moveTo(points[i].x, points[i].y);
				}
				con2d.closePath();
				con2d.stroke();
			}
		},

		poly: function (points) {
			con2d.beginPath();
			if (points.length > 0) {
				con2d.moveTo(points[0].x, points[0].y);
				for (var i = 1; i < points.length; i++) {
					con2d.lineTo(points[i].x, points[i].y);
				}
				con2d.fill();
			}
		},

        clearColor: function (color) {
            con2d.clearStyle = color;
        },

		fillColor: function (color) {
			con2d.fillStyle = color;
		},

		lineColor: function (color) {
			con2d.strokeStyle = color;
		},

		lineWidth: function (lineWidth) {
			con2d.lineWidth = lineWidth;
		},

		translate: function (x, y) {
			con2d.translate(x, y);
		},

		rotate: function (angle) {
			con2d.rotate(angle);
		},

		scale: function (x, y) {
			con2d.scale(x, y);
		},

		save: function () {
			con2d.save();
		},

		restore: function () {
			con2d.restore();
		}
	};

	window.Draw = Draw;
})();