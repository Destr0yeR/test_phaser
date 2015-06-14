//var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gamePlayer', { preload: preload, create: create, update: update });
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamePlayer', { preload: preload, create: create, update: update });


var white = null;
var origin = null;
var constants = new GameConstants();

var bullets = new Array();

var player = null;
var cursors = null;
var keyboard = null;

var PhysicsController = new Physics(constants.getGravity());

var textAngle = null;
var angle = 0;

google: {
      families: ['Revalia']
    }


function preload() {
	game.load.image('white', 'assets/white.png');
	game.load.image('black', 'assets/black.png');
	game.load.image('red', 'assets/red.png');
	game.load.image('blue', 'assets/blue.png');
	game.load.image('target', 'assets/target.png');
	game.load.image('arrow', 'assets/arrow2.png');
	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
}

function create() {
	game.stage.backgroundColor = '#cccccc'
	bullets.push(new Bullet('white', 200 , 0));
	bullets.push(new Bullet('black', 400 , 0));
	bullets.push(new Bullet('blue', 600 , 0));

	player = new Player();
	constants.setWindowHeight(game.height);
	constants.setWindowWidth(game.width);
	cursors = game.input.keyboard.createCursorKeys();
	keyboard = game.input.keyboard;

	texAngle = game.add.text(game.world.centerX, game.world.centerY, "Angle : "+ Math.round(angle));
	texAngle.anchor.setTo(0.5);
	texAngle.font = 'Revalia';
    texAngle.fontSize = 60;

    var linear = new Linear();

    var vector = new Vector(3,0,0);
    var vector2 = new Vector(5,5,0);

    console.log(linear.crossProduct(vector, vector2));
    console.log(linear.dotProduct(vector, vector2));
    console.log(linear.angle(vector, vector2));
    console.log(linear.angle(vector2, vector));
}


function update() {
	/*
	for(var i = 0 ; i < bullets.length ; ++i){
		var bullet = bullets[i];

		if(!bullet.touching_platform){
			bullet.applyGravity();
		}
		else{
			bullet.releaseGravity();
		}

		if((bullet.y + bullet.height) > constants.getWindowHeight()){
			if(bullet.touching_platform == false){
				bullet.touching_platform = true;

				if(bullet.velocity.x != 0){
					console.log("======INI====");
					console.log(i);
					console.log(bullet.y);
					console.log(bullet.height);
					console.log(constants.getWindowHeight());
					console.log("======END=====");
				}
			}
		}
		if(bullet.velocity.x != 0){
			if(bullet.y){
				console.log(bullet.y);
			}
		}

		bullet.update();
	}

	if(cursors.up.isDown){
		angle += 0.1;
	}
	if(cursors.down.isDown){
		angle -= 0.1;
	}

	player.changeAngle(Math.round(-angle));

	texAngle.setText("Angle : "+ Math.round(angle));

	if(keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		if(!SPACEBAR_down){
			var tmp = new Bullet('red', player.x, player.y);
			tmp.changeScale(0.5);
			tmp.addVelocity({x: 10, y: -20});
			bullets.push(tmp);
			SPACEBAR_down = true;
		}
	}
	else{
		SPACEBAR_down = false;
	}*/
}