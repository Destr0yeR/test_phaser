var GameConstants = function() {
	this.gravity = 4.9;
	this.height = 0;
	this.width = 0;

	this.getGravity = function(){
		return this.gravity;
	}

	this.setWindowHeight = function(height){
		this.height = height;
	}

	this.setWindowWidth = function(width){
		this.width = width;
	}

	this.getWindowHeight = function(){
		return this.height;
	}

	this.getWindowWidth = function(){
		return this.width;
	}
}

