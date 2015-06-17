
var PhysicConstants = (function() {
	return {
		gravity: function(){ return 98; },
		RECTANGLE: function(){ return 'RECTANGLE'; },
		CIRCLE: function(){ return 'CIRCLE'; }
	};
})();

var UNDEFINED = (function () {
	return function() { return 'undefined' };
})();