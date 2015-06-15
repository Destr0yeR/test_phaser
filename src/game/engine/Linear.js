function Linear() {

	this.crossProduct = crossProduct;

	this.dotProduct = dotProduct;

	this.angle = angle;

	this._length = _length;

	function crossProduct(u, v) {
		var result = new Vector();

		result.x = u.y*v.z - u.z*v.y;
		result.y = -(u.x*v.z - u.z*v.x);
		result.z = u.x*v.y - u.y*v.x;

		return result;
	}

	function dotProduct(u, v) {

		var x = u.x * v.x;
		var y = u.y * v.y;
		var z = u.z * v.z;

		return (x + y + z);
	}

	function angle(u, v) {
		var result = dotProduct(u, v)/(_length(u)*_length(v));
		return (Math.acos(result*180)/Math.acos(-1);
	}

	function _length(u) {
		return Math.sqrt(u.x*u.x + u.y*u.y + u.z*u.z);
	}
}