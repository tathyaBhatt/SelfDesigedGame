 var canvas;
var backgroundImg, playerDragon, waterAttack, fireAttack, gameState;
var bg = 'dragon_city_large.jpg';
var dragons =[];
var playerDragonImg, villianDragonImg, villianDragon, playerCount, database, allPlayers;
function preload(){
    getBackgroundImg();
     playerDragonImg = loadImage("ye.png");
     villianDragonImg = loadImage("download.png");
     fireImg = loadImage("fire.png");
     waterImg = loadImage("water.png");
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }
  function draw(){
      if(playerCount === 2){
          game.update(1)
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
console.log("game is ended") ;
     }
  }

