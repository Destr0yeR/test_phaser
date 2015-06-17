var Collision = (function() {
	return {
		rectangleByRectangle: function(rec1, rec2) { 
			return 98; 
		},
		rectangleByCircle: function(rec, cir){ 
			return 'RECTANGLE'; 
		},
		circleByCircle: function(cir1, cir2){ 
			return 'CIRCLE'; 
		}
	};
})();