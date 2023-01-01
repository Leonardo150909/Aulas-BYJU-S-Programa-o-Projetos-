var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["aab792c9-1ca6-4437-8c87-cb8ad5a3459b","a01983e5-6dd2-487b-9dce-00c2ab9a259b","86d0dd6b-d6ee-49fe-8276-cc45e2b6cc98"],"propsByKey":{"aab792c9-1ca6-4437-8c87-cb8ad5a3459b":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"a01983e5-6dd2-487b-9dce-00c2ab9a259b":{"name":"pieceYellow_single11_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"c3U_M6wm0S9s27pU1gTSB71VcM_hTWMW","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/a01983e5-6dd2-487b-9dce-00c2ab9a259b.png"},"86d0dd6b-d6ee-49fe-8276-cc45e2b6cc98":{"name":"golfball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var raquete;
var ball;
var fundo = createSprite(200, 200);
fundo.setAnimation("space_1");

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

raquete=createSprite(200,390,100,20);
raquete.setAnimation("pieceYellow_single11_1");
raquete.scale = 1.3;
ball=createSprite(200,200,20,20);
ball.setAnimation("golfball_1");
ball.scale = 0.07;
createEdgeSprites();
var score = 0;
var gameState = "iniciar";

function draw() {
  background("white");
  drawSprites();
  
  if (gameState === "iniciar") {
     textSize(18);
     fill("yellow");
     text("Pressione a tecla ENTER para começar o jogo", 0, 50);
    if(keyDown("enter")) {
    ball.velocityX=5;
    ball.velocityY=4;
    gameState = "jogar";
    playSound("assets/category_background/fantasy.mp3", true);
  }
  }
  if (gameState === "jogar") {
    raquete.x = World.mouseX;
    if (ball.isTouching(bottomEdge) || score == 16) {
      gameState = "fim";
    }
  }
  if (gameState === "fim") {
    ball.velocityX = 0;
    ball.velocityY = 0;
    fill("yellow");
    textSize(18);
    text("FIM DE JOGO", 150,250);
    stopSound("assets/category_background/fantasy.mp3");
    raquete.x = 200;
    raquete.y = 380;
  }
  if (ball.isTouching(box1)) {
    score = score+1;
    box1.destroy();
   playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  if (ball.isTouching(box2)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box2.destroy();
  }
  if (ball.isTouching(box3)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box3.destroy();
  }
  if (ball.isTouching(box4)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box4.destroy();
  }
  if (ball.isTouching(box5)) {
   score = score+1; 
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box5.destroy();
  }
  if (ball.isTouching(box6)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box6.destroy();
  }
  if (ball.isTouching(box7)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box7.destroy();
  }
  if (ball.isTouching(box8)) {
   score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box8.destroy();
  }
  if (ball.isTouching(box9)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box9.destroy();
  }
  if (ball.isTouching(box10)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box10.destroy();
  }
  if (ball.isTouching(box11)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box11.destroy();
  }
  if (ball.isTouching(box12)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box12.destroy();
  }
  if (ball.isTouching(box13)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box13.destroy();
  }
  if (ball.isTouching(box14)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box14.destroy();
  }
  if (ball.isTouching(box15)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box15.destroy();
  }
  if (ball.isTouching(box16)) {
    score = score+1;
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    box16.destroy();
  }
  raquete.x = World.mouseX;
  ball.bounceOff(raquete);
  //rebater a bola nos limites
  ball.bounceOff(edges);
  //desenhar sprites na tela
  //exibir a pontuação 
  textSize(20);
  fill("red");
  text("Pontuação: " + score, 5, 20);
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
