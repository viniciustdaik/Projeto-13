var bow, arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage,
blue_balloonImage, orange_balloonImage, purple_balloonImage, yellow_balloonImage, backgroundImage;
var edges;
var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  yellow_balloonImage = loadImage("yellow_balloon.png");
  orange_balloonImage = loadImage("orange_balloon.png");
  purple_balloonImage = loadImage("purple_balloon.png");
}

function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  edges = createEdgeSprites();
}

function draw() {
 background(0);
  //Movendo chão.
    scene.velocityX = -3 
    
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  console.log(select_balloon);
  //Movendo flecha.
  bow.y = World.mouseY
  
   //Soltar flecha quando "Barra De Espaço" é pressionada.
  if(keyDown("space")) {
    createArrow();
  }
  if(bow.y <40){
    bow.y = 40;
  }
  if(bow.y >359){
    bow.y = 359;
  }
  //Criando inimigos continuamente.
 
  var select_balloon = Math.round(random(1,7));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if(select_balloon == 4){
      orangeBalloon();
    } else if(select_balloon == 5){
      yellowBalloon();
    } else if(select_balloon == 6){
      purpleBalloon();
    } else {
      pinkBalloon();
    }
  }
  drawSprites();
  textSize(20);
  fill('gold');
  text("Pontuação: "+ score, 30,50)
}
//Criando flechas para arco.
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  green.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pink.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function orangeBalloon() {
  var orange = createSprite(0,Math.round(random(20, 370)), 10, 10);
  orange.addImage(orange_balloonImage);
  orange.velocityX = 3;
  orange.lifetime = 150;
  orange.scale = 0.1;
  orange.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 0.1;
  yellow.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function purpleBalloon() {
  var purple = createSprite(0,Math.round(random(20, 370)), 10, 10);
  purple.addImage(purple_balloonImage);
  purple.velocityX = 3;
  purple.lifetime = 150;
  purple.scale = 0.1;
  purple.depth = bow.depth;
  bow.depth = bow.depth+1;
}
