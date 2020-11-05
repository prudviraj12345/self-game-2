
  
var game;
var gameState = 0;
var player;
var playerCount;
var form;
var players;
var playerIndex;




function setup(){

    canvas = createCanvas(displayWidth - 20, displayHeight-30);    

   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();





}

function draw(){
    background("black");
   
    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }





    drawSprites();
}

