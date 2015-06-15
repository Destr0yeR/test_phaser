var Vector = function (x, y, z) {
	this.x = null;
	this.y = null;
	this.z = null;
	if(typeof x === 'undefined'){
		this.x = 0;
	}
	else{
		this.x = x;
	}
	if(typeof y === 'undefined'){
		this.y = 0;
	}
	else{
		this.y = y;
	}
	if(typeof z === 'undefined'){
		this.z = 0;
	}
	else{
		this.z = z;
	}
}

Vector.prototype.scale = function(scalar) {
	var result = this.clone();

	result.x *= scalar;
	result.y *= scalar;
	result.z *= scalar;

	return result;
};

Vector.prototype.cross = function(v) {
	var result = new Vector();

	result.x = this.y*v.z - this.z*v.y;
	result.y = -(this.x*v.z - this.z*v.x);
	result.z = this.x*v.y - this.y*v.x;

	return result;
}

Vector.prototype.dot = function(v) {
	var x = this.x * v.x;
	var y = this.y * v.y;
	var z = this.z * v.z;

	return (x + y + z);
}

Vector.prototype.angle = function(v) {
	var result = this.dot(v)/(this.length()*v.length());
	return (Math.acos(result)*180)/Math.acos(-1);
}

Vector.prototype.length = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

Vector.prototype.clone = function() {
	var result = new Vector();

	result.x = this.x;
	result.y = this.y;
	result.z = this.z;

	return result;
}