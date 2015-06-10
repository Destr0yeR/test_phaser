//var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gamePlayer', { preload: preload, create: create, update: update });
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamePlayer', { preload: preload, create: create, update: update });


var white = null;
var origin = null;
var constants = new GameConstants();

var bullets = new Array();

var player = null;
var cursors = null;

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

	texAngle = game.add.text(game.world.centerX, game.world.centerY, "Angle : "+ Math.round(angle));
	texAngle.anchor.setTo(0.5);
	texAngle.font = 'Revalia';
    texAngle.fontSize = 60;
}


function update() {

	for(var i = 0 ; i < bullets.length ; ++i){
		var bullet = bullets[i];

		if(!bullet.touching_platform){
			PhysicsController.applyGravity(bullet);
		}
		if((bullet.y + bullet.height) >= constants.getWindowHeight()){
			bullet.touching_platform = true;
		}

		if(cursors.up.isDown){
			angle += 0.05;
		}
		if(cursors.down.isDown){
			angle -= 0.05;
		}

		player.changeAngle(Math.round(-angle));

		texAngle.setText("Angle : "+ Math.round(angle));
	}
}