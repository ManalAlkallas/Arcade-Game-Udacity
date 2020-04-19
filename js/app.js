
var Bug = function(sprite, x, y, name) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.name = name;
};

Bug.prototype.render = function() {
    // calls the context from canvas to draw the sprite image
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "15px Roboto";
    ctx.textAlign = "center";
    // gave the Bug a unique name
    ctx.fillText(this.name, this.x + 50, this.y + 155);
};

// Enemies our player must avoid
var Enemy = function(sprite, x, y, name, movement) {
    // Calling the Bug constructor so we can pass
    // in those arguments so we don't have to re-write the code
    Bug.call(this, sprite, x, y, name);
    // enemy has it's own unique movement
    this.movement = movement;
};
// Enemy prototype to inherit Bug.prototype's methods
Enemy.prototype = Object.create(Bug.prototype);
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
    // Check if the enemy and the player collided 
    checkCollision();
};

var Player = function(sprite, x, y, name, movement) {
    Bug.call(this, sprite, x, y, name);
    // This sets the player to move at 50px
    this.movement = 50;
};

Player.prototype = Object.create(Bug.prototype);
Player.prototype.constructor = Player;

//Input handler for player
Player.prototype.handleInput = function(e) {

    if (e === 'left' && this.x > 0){
        this.x -= this.movement;
    }
    else if (e === 'right' && this.x < 400){
        this.x += this.movement;
    }
    else if (e === 'up'){
        //  Makes sure to reset each time after reaching the water.
        if (this.y < 40){

        this.reset(); 

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
// Player returns back to original position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

// Increase then level
var increaseLevel = function(level) {
    allEnemies.length = 0;
    // A list of enemy's names
    var name = ['Venus', 'Earth', 'Mars', 'Jupiter', 'The Saturn', 'Uranus', 'Neptune', 'Moon', 'Sun'];
    // new set of enemies for loop
    for (var i = 0; i < level; i++) {
        var enemy = new Enemy('images/enemy-bug.png', 0, Math.random() * 184 + 50, name[i], Math.random() * 256);
        allEnemies.push(enemy);
    }
    // Add 1 more enemy after level 6
    if (level > 6) {
        var enemy = new Enemy('images/enemy-bug.png', 0, Math.random() * 184 + 50, name[i], Math.random() * 256);
        allEnemies.push(enemy);
    }
};
// increasing the numbers of enemy, level and scores
var decreaseLevel = function() {
    if (allEnemies.length >= 1) {
        allEnemies.pop(enemy);
        level--; // update the level
        score--; // add score, and more enemies
    }
}

// Collision checking
var checkCollision = function() {
    //If the player reaches enemy proximity by 40px in all directions, execute the following
    for (var i = 0; i < allEnemies.length; i++) {
        if (Math.abs(player.x - allEnemies[i].x) <= 40) {
            if (Math.abs(player.y - allEnemies[i].y) <= 40) { //Math.abs(-x) = x
                player.reset();
                decreaseLevel(); // decrease level
                displayStats(); // update stats when levels drop
                console.log('current score: ' + score); //check to see that the stats work
                console.log('current level: ' + level);
            }
        }
    }
};

// Display statistics
var displayStats = function() {
    document.getElementById('currentStats').innerHTML = 'Level: ' + level.toString() + " | " + 'Score: ' + score.toString();
    document.getElementById('numberOfEnemies').innerHTML = 'Enemies: ' + allEnemies.length.toString();
};

// Enemies storage place
var allEnemies = [];

// Create a player, position and name
var player = new Player('images/char-pink-girl.png', 200, 400, 'Manal');

// Adding one enemy in the beginning
var enemy = new Enemy('images/enemy-bug.png', -2, Math.random() * 184 + 50, 'Mercury', Math.random() * 256);
allEnemies.push(enemy);

// Start score
var score = 0;

// Start level at 1
var level = 1;

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
