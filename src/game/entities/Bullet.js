function Bullet(name, x, y) {

	this.sprite = createSprite(name, x, y);

	this.x = this.sprite.x;
	this.y = this.sprite.y;
	this.touching_platform = false;
	this.sprite.scale.x *= 0.05;
	this.sprite.scale.y *= 0.05;
	this.height = this.sprite.height;
	this.width = this.sprite.width;

	this.addVelocity = function(velocity){
		this.velocity.x += velocity.x;
		this.velocity.y += velocity.y;	
	}

	this.changeVelocity = function(velocity){
		this.velocity.x = velocity.x;
		this.velocity.y = velocity.y;
	}

	this.update = function(){
		this.sprite.x = this.x;
		this.sprite.y = this.y;

		if(this.velocity.x > 0){
			this.sprite.x += this.velocity.x;
			this.velocity.x -= 0.1;
		}
		if(this.velocity.y > 0){
			this.sprite.y += this.velocity.y;
			this.velocity.y -= 0.1;
		}
	}

	function createSprite(name, x, y){
		return game.add.sprite(x, y, name);
	}
}