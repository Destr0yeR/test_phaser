function Player(){

	this.sprite = createSprite('target', 0, game.height - 100);
	this.arrow = createSprite('arrow', 0, game.height - 100);

	this.x = this.sprite.x;
	this.y = this.sprite.y;

	this.sprite.scale.x *= 0.05;
	this.sprite.scale.y *= 0.05;
	this.arrow.scale.x *= 0.045;
	this.arrow.scale.y *= 0.045;

	this.arrow.x += 25;
	this.arrow.y += 25; 

	this.arrow.anchor.setTo(0.5, 0.5);



	function createSprite(name, x, y){
		return game.add.sprite(x, y, name);
	}

	this.changeAngle = function(angle){
		this.arrow.angle = angle - 90;
	}
}