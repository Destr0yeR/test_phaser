function Bullet(name, x, y) {

	this.sprite = createSprite(name, x, y);

	this.x = this.sprite.x;
	this.y = this.sprite.y;
	this.touching_platform = false;
	this.sprite.scale.x *= 0.05;
	this.sprite.scale.y *= 0.05;
	this.height = this.sprite.height;
	this.width = this.sprite.width;
	this.velocity = {};
	this.velocity.x = 0;
	this.velocity.y = 0;
	this.gravity = false;

	this.addVelocity = function(velocity){
		this.velocity.x += velocity.x;
		this.velocity.y += velocity.y;
	}

	this.changeVelocity = function(velocity){
		this.velocity.x = velocity.x;
		this.velocity.y = velocity.y;
	}

	this.update = function(){
		if(this.velocity.x != 0){
			this.x += this.velocity.x;
		}
		if(this.gravity){
			if(this.velocity.y != 0){
				this.velocity.y += constants.getGravity();
			}
			this.y += this.velocity.y;
		}
		this.sprite.x = this.x;
		this.sprite.y = this.y;
	}

	function createSprite(name, x, y){
		return game.add.sprite(x, y, name);
	}

	this.changeScale = function(scale){
		this.sprite.scale.x *= scale;
		this.sprite.scale.y *= scale;
	}

	this.applyGravity = function(){
		this.gravity = true;
	}

	this.releaseGravity = function(){
		this.gravity = false;
	}
}