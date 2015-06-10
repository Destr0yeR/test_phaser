function Physics (gravity) {
	
	this.gravity = gravity;

	this.applyGravity = function(object) {
		object.y += gravity;
		object.update();
	}
}