var PhysicObject = function(mass, x, y, z) {
	this.forces 		= new Array();
	this.force 			= new Vector();
	this.aceleration 	= new Vector();
	this.velocity 		= new Vector();
	this.position 		= new Vector(x, y, z);
	this.mass			= mass;
}

PhysicObject.prototype.update = function(delta) {
	console.log('Start of update');
	var new_resultant_force = new Vector();

	for(var key in this.forces) {
		new_resultant_force.selfAdd(this.forces[key]);
	}
	var new_aceleration = new_resultant_force.scale(1/this.mass);

	this.position = this.position.add(this.velocity.scale(delta).add(this.aceleration.scale(delta*delta*0.5)));
	console.log(this.position);
	this.velocity = this.aceleration.add(new_aceleration).scale(0.5);
	console.log(this.velocity);
	this.aceleration = new_aceleration;
	console.log(this.aceleration);
	console.log('End of update');
};

PhysicObject.prototype.addForce = function(force) {
	if(!(force instanceof Vector)){
		throw "Argument must be instance of Vector";
	}
	else{
		this.forces.push(force);
	}
}