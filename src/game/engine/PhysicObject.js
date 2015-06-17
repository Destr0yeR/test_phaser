var PhysicObject = function(mass, position, w, h, d) {

	/**
		Array of Physic Objects that will collide wtih our Physic Object
	*/
	this.colliders		= new Array();

	/**
		Array of Forces that will be applied to our object
	*/
	this.forces 		= new Array();

	/**
		Instant acceleration of the objet generated from
		a = F/m
		F: resultant force
		m: mass of the body
	*/
	this.acceleration 	= new Vector();

	/**
		Intant Velocity of the object generated from
		vf =  v0 + (La + Na)/2;
		La: last acceleration
		Na: new acceleration
	*/
	this.velocity 		= new Vector();

	/**
		Instant postition generated from
		df = do + v*t + (a/2)*t*t;
	*/
	this.position 		= position;

	/**
		Mass of the body required to 2 Law of Newton
	*/
	this.mass			= mass;

	/**
		Boundary type of Physic Object
		RECTANGLE : used to detect quadrilaterals collisions
		CIRCLE: 	used to detect circles collisions
	*/
	this.boundary_type	= PhysicConstants.RECTANGLE();

	/**
		Center of the Physic Object used to maths in circle collision
	*/
	this.center			= new Vector();


	/**
		TODO(javier): refactor method to define default variables when UNDEFINED
	*/

	if(typeof w === UNDEFINED()) {
		console.log('xxx');
		this.w = 0;
	}
	else {
		this.w = w;
	}

	if(typeof h === UNDEFINED()) {
		this.h = 0;
	}
	else {
		this.h = h;
	}

	if(typeof d === UNDEFINED()) {
		this.d = 0;
	}
	else {
		this.d = d;
	}

	this.calculateCenter();

	this.gravity_enabled = true;
}

PhysicObject.prototype.update = function(delta) {

	/**
		TODO(javier) : check flow with lots of forces
	**/
	console.log('Start of update');
	var new_resultant_force = new Vector();

	for(var key in this.forces) {
		new_resultant_force.selfAdd(this.forces[key]);
	}
	var new_acceleration = new_resultant_force.scale(1/this.mass);

	this.position.selfAdd(this.velocity.scale(delta).add(this.acceleration.scale(delta*delta*0.5)));
	
	this.velocity.selfAdd(this.acceleration.add(new_acceleration).scale(0.5));

	this.acceleration = new_acceleration;

	this.sprite.x = this.position.x;
	this.sprite.y = this.position.y;
	this.sprite.update();
};

PhysicObject.prototype.addForce = function(force) {
	if(!(force instanceof Vector)) {
		throw "Argument must be instance of Vector";
	}
	else {
		this.forces.push(force);
	}
}

PhysicObject.prototype.refreshColliders = function() {
	this.colliders = [];
}

PhysicObject.prototype.addCollider = function(obj) {
	if(!(obj instanceof PhysicObject)) {
		throw "Argument must be instanceof of PhysicObject";
	}
	else {
		this.colliders.push(obj);
	}
}

PhysicObject.prototype.updateForces = function() {
	this.resetForces();
	this.applyGravity();
	/**
		TODO(javier): generate force from colliders
	*/
	switch(this.boundary_type){
		PhysicConstants.RECTANGLE():
			break;
		PhysicConstants.CIRCLE():
			break;
		default:
			throw "Boundary dint been defined";
			break;
	}
}

PhysicObject.prototype.applyGravity = function() {
	if(this.gravity_enabled) {
		this.forces.push(new Vector(0, PhysicConstants.gravity(), 0));
	}
}

PhysicObject.prototype.resetForces = function() {
	this.forces = [];
}

PhysicObject.prototype.enableGravity = function() {
	this.gravity_enabled = true;
}

PhysicObject.prototype.disableGravity = function() {
	this.gravity_enabled = false;
}

PhysicObject.prototype.calculateCenter = function() {
	this.center = new Vector(this.position.x + (this.w)/2 , this.position.y + (this.h)/2, this.position.z + (this.d)/2);
}


PhysicObject.prototype.addSprite = function(sprite) {
	this.sprite = sprite;
}