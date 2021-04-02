class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    dragon1 = createSprite(100,200);
    dragon1.addImage("dragon1",villianDragonImg);
    dragon2 = createSprite(300,200);
    dragon2.addImage("dragon2",playerDragonImg);
    dragons = [dragon1, dragon2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
if(backgroundImg){
   backgroundImg;
}      
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars


      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
      if(keyDow("UP")){
        y = displayHeight-5;
      }

        //position the cars a little away from each other in x direction
        //use data form the database to display the cars in y direction
        dragons[index-1].x = x;
        dragons[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          dragons[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
   
    drawSprites();
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