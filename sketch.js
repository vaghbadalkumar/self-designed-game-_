var Scaryghost
var multiplayer 
var player1
var player2
var player3
var player4
var goodDoll
var badDoll

function preload(){
  f2 = loadImage("images/f1.png");
  //s=loadSound("sounds/sliding.mp3")
  Scaryghost= loadImage();
  multiplayer= loadImage();
  player1 = loadImage();
  player2 = loadImage();
  player3 = loadImage();
  player4 = loadImage();
  goodDoll = loadImage();
  badDoll = loadImage();
function setup() 


}

function draw() {
  //start the game
  background(200, 200, 255);
}

  //start the game
  if (playerCount === 0) {
    game.update(0);
  }

  //start the game for real
  if (gameState === 0) {
    game.play();
  }
  if (gameState === 0) {
    console.log("End");  
  drawSprites();

  
}