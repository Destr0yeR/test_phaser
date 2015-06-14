function Vector(x, y, z) {
	this.x = null;
	this.y = null;
	this.z = null;
	this.scale = scale;
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

	function scale(scalar){
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
	}
}