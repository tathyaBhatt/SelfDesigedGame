var canvas;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
var form, player, game;
var welcomeImg;
var bg, backgroundImg;
var pDragon, vDragon;
var pDragonImg, vDragonImg

function preload(){
   welcomeImg = loadImage("hello.jpg");
   pDragonImg = loadImage("ye.png")
   vDragonImg = loadImage("download.png")
   
  getBackgroundImg();
}
function setup(){
canvas = createCanvas(displayWidth, displayHeight);
database = firebase.database();
background(welcomeImg);
game = new Game();
game.getState();
game.start();

}

function draw(){

  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    console.log("end");
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=04 && hour<=12){
      bg = "e.jpg";
  }
  else if(hour >=23 && hour <=04 ){
      bg = "hi.jpg";
  }
  else if (hour > 12 && hour <= 17 ){
       bg ="dragon_city_large.jpg"
  }
  else{
      bg ="a.jpg"
  }
  backgroundImg = loadImage(bg);
}
