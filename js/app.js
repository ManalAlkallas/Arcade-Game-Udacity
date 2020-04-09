// Superclass
var Character = function(sprite, x, y, name) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.name = name;
};

Character.prototype.render = function() {
    // calls the context from canvas to draw the sprite image
    // and to position the image
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "15px Roboto";
    ctx.textAlign = "center";
    // gave characters a unique name
    ctx.fillText(this.name, this.x + 50, this.y + 155);
};

//Subclasses

// Enemies our player must avoid
var Enemy = function(sprite, x, y, name, movement) {
    // Calling the character constructor so we can pass
    // in those arguments so we don't have to re-write the code
    Character.call(this, sprite, x, y, name);
    // enemy has it's own unique movement
    this.movement = movement;
};
// Enemy prototype to inherit Character.prototype's methods
Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Remember: canvas.width = 505 | canvas.height = 606;

Enemy.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
    if (this.x < 500){
        this.x += this.movement * dt;
    }
    else {
        //resets x direction off screen.
        //calculate a reset for this.
        this.x = -2;
        this.y = Math.random() * 184 + 50;
    }
    // Method to check if enemy and player collided or not
    checkCollision();
};

// Player we control
var Player = function(sprite, x, y, name, movement) {
    Character.call(this, sprite, x, y, name);
    // This sets the player to move at 50px
    this.movement = 50;
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

// Use this update method later
// Player.prototype.update = function(dt) {
// };

//Input handler for player
Player.prototype.handleInput = function(e) {

    if (e === 'left' && this.x > 0){
        this.x -= this.movement;
    }
    else if (e === 'right' && this.x < 400){
        this.x += this.movement;
    }
    else if (e === 'up'){
        // This contraint makes sure you reset each time you reach the water.
        if (this.y < 40){

        this.reset(); // resets player

        level++; // adds 1 to the current level
        score += level * 2; // adds to the score
        console.log('current score: ' + score);
        console.log('current level: ' + level);
        increaseLevel(level); // adds more enemies based on the level
        displayStats(); // update stats when level increases
        }
        // if not the water, subtract from current 'y' to keep moving up
        else {
            this.y -= this.movement;
        }
    }
    else if (e === 'down' && this.y < 400){
        this.y += this.movement;
    }
};
// Player reset back to original position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

//Level increases
var increaseLevel = function(level) {
    allEnemies.length = 0;
    // list of names for the enemy
    var name = ['billy', 'Joel', 'Snickers', 'Homer', 'The terminator', 'ROBO-COP', 'Ice man', 'Finn', 'Jake', 'Final Boss'];
    // new set of enemies for loop
    for (var i = 0; i < level; i++) {
        var enemy = new Enemy('images/enemy-bug.png', 0, Math.random() * 184 + 50, name[i], Math.random() * 256);
        allEnemies.push(enemy);
    }
    // Add 1 more enemy after level 5
    if (level > 5) {
        var enemy = new Enemy('images/enemy-bug.png', 0, Math.random() * 184 + 50, name[i], Math.random() * 256);
        allEnemies.push(enemy);
    }
};
// decreasing enemy, level and score
var decreaseLevel = function() {
    if (allEnemies.length >= 1) {
        allEnemies.pop(enemy);
        level--; // adds to the current level
        score--; // adds to score, and adds more enemies
    }
}

// Checking for collision
var checkCollision = function() {
    //If the player reachs enemy proximity by 40px in all directions, execute the following
    for (var i = 0; i < allEnemies.length; i++) {
        if (Math.abs(player.x - allEnemies[i].x) <= 40) {
            if (Math.abs(player.y - allEnemies[i].y) <= 40) { //Math.abs(-x) = x
                player.reset();
                decreaseLevel(); // decrease level
                displayStats(); // update stats when levels decrease
                console.log('current score: ' + score); //check to see that the stats work
                console.log('current level: ' + level);
            }
        }
    }
};

// Display stats
var displayStats = function() {
    document.getElementById('currentStats').innerHTML = 'Level: ' + level.toString() + " | " + 'Score: ' + score.toString();
    document.getElementById('numberOfEnemies').innerHTML = 'Enemies: ' + allEnemies.length.toString();
};

// Enemies storage place
var allEnemies = [];

// Instantiate a new player
var player = new Player('images/char-boy.png', 200, 400, 'Will Yuan');

// Start score at zero
var score = 0;

// Start level at 1
var level = 1;

// Instantiate one enemy in the beginning
var enemy = new Enemy('images/enemy-bug.png', -2, Math.random() * 184 + 50, 'Bob', Math.random() * 256);
allEnemies.push(enemy);

//Call display stats globally
displayStats();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
