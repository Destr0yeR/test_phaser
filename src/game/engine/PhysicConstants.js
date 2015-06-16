
var PhysicConstants = (function() {
	return {
		gravity: function(){ return 9.8; },
		RECTANGLE: function(){ return 'RECTANGLE'; },
		CIRCLE: function(){ return 'CIRCLE'; }
	};
})();

var UNDEFINED = (function () {
	return function() { return 'undefined' };
})();