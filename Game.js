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
      form = new Form();
      form.display();
    }
    pDragon = createSprite(displayWidth-200, displayHeight/2);
    pDragon.addImage("playerImage",pDragonImg);
    pDragon.scale=0.4;
    vDragon = createSprite(displayWidth-700, displayHeight/2);
    vDragon.addImage("villianImage",vDragonImg);
    vDragon.scale=0.4;

  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background(backgroundImg);

      if(keyDown("w")){
        pDragon.y -=5;
      }
      if(keyDown("s")){
        pDragon.y +=5;
      }
      if(keyDown("a")){
        pDragon.x -=5;
      }
      if(keyDown("d")){
        pDragon.x +=5;
      }
    }
    drawSprites();
  }


  
  

  }
