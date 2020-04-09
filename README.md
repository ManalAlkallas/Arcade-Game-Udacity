
# Custom frogger Arcade Game :frog:

## Summary :speech_balloon:
Custom frogger Arcade is a variation of the classic Frogger arcade game developed by Konami and licensed for North American distribution by Sega-Gremlin and worldwide by Sega itself. It is regarded as a classic from the golden age of video arcade games, noted for its novel gameplay and theme. [wiki/Frogger](https://en.wikipedia.org/wiki/Frogger)

#### Objectives of the game :running:
The object of the game is simple, you must direct the hero character across the grey brick road, full of enemy bugs, towards the water without getting hit.

Your score is based on your current score + (level x 2) for each level you pass.

The enemy bugs run across the screen at random speeds in the x direction and random y locations given their constraints which is between the grey bricks.

The number of enemy bugs will increase by 1 until level 6 where an increase of 1 bug will be added to the total enemies each time you complete the level.

If you run into an enemy bug, you will reset, your level decreases by 1, your score decreases by 1 and the enemy you run into will disappear.

![frogger image](/images/froggerwill.png)

#### How to play and the controls :video_game:
Users control the hero character by using the main keyboard keys: [  ←   →   ↑   ↓  ] arrow keys on their keyboard. There is no press down and hold option, you must press each key to move in that specific direction.

## Demo the game
* Play Zeh Demo: [Demo Me](https://iamwill123.github.io/Frogger-Arcade-Game/game.html "Play game demo")

## Github pages website
* Github pages website: [Frogger Arcade Game](https://iamwill123.github.io/Frogger-Arcade-Game/ "Github Pages Website")

## Modifications of your own :raised_hands:

1. Download the GitHub zip file or clone the repository onto your local workstation:
    * zip file: [https://github.com/iamwill123/Frogger-Arcade-Game/archive/master.zip](https://github.com/iamwill123/Frogger-Arcade-Game/archive/master.zip "Zip file")
    * git clone: [https://github.com/iamwill123/Frogger-Arcade-Game.git](https://github.com/iamwill123/Frogger-Arcade-Game.git "clone repository")

2. To check out the game, navigate to the index.html file in your application's directory and double click to open in your browser.

## Tools & Techniques involved
1. Object-Oriented JavaScript
    - Scopes
    - Closures
    - The 'this' Keyword
    - Prototype Chains
    - Object Decorator Pattern
    - Functional Classes
    - Prototypal Classes
    - Superclass and Subclass
    - Pseudoclassical Subclasses
2. HTML5 Canvas API
    - HTML5 Canvas Basics
    - From Pixels to Animation

## List of Resources
[http://www.w3schools.com/Tags/ref_canvas.asp](http://www.w3schools.com/Tags/ref_canvas.asp "HTML5 Canvas Reference")

[https://github.com/udacity/frontend-nanodegree-arcade-game](https://github.com/udacity/frontend-nanodegree-arcade-game "Udacity Frontend arcade game")

===============================

##The Udacity Project Requirements

### How do I complete this project?

#### Students should use this rubric for self-checking their submission:
[https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797/](https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797/ "Frogger Arcade Game Project Requirements")

##frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).