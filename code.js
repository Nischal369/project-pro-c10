var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f6d41534-b457-419d-ad0d-04bf956f84bd","9ff3cf81-400d-412e-83cf-115ebfdc32a1","af8c827e-15ae-4301-a53c-8c068c03debf","b6c327f1-0062-4e26-8590-f194641e36cd","8b2431b5-ffee-43f0-9a14-a22f2e1226a7","3ba3a545-2834-45ee-8512-c0dd5ba4c3aa","a6e0a983-390a-42f8-9059-9aa49c44402d"],"propsByKey":{"f6d41534-b457-419d-ad0d-04bf956f84bd":{"name":"brown_cat_1","sourceUrl":null,"frameSize":{"x":191,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"hjfdKJpcjc1huKNpmAB5qrmxrX36bsJC","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":300},"rootRelativePath":"assets/f6d41534-b457-419d-ad0d-04bf956f84bd.png"},"9ff3cf81-400d-412e-83cf-115ebfdc32a1":{"name":"mouse_1","sourceUrl":null,"frameSize":{"x":61,"y":37},"frameCount":2,"looping":true,"frameDelay":12,"version":"bseiMylYiC7ihF5VB70vGw7TK9sfDmZr","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":74},"rootRelativePath":"assets/9ff3cf81-400d-412e-83cf-115ebfdc32a1.png"},"af8c827e-15ae-4301-a53c-8c068c03debf":{"name":"orange_cat_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_9DyaUDX71HXd3ZDq8czdwuTP6pbZX83/category_animals/orange_cat.png","frameSize":{"x":166,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"_9DyaUDX71HXd3ZDq8czdwuTP6pbZX83","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":166,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_9DyaUDX71HXd3ZDq8czdwuTP6pbZX83/category_animals/orange_cat.png"},"b6c327f1-0062-4e26-8590-f194641e36cd":{"name":"yellow_cat_2","sourceUrl":null,"frameSize":{"x":191,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"dtG0cZQfUd6dwM.d76L9lJx68B9t36QK","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":300},"rootRelativePath":"assets/b6c327f1-0062-4e26-8590-f194641e36cd.png"},"8b2431b5-ffee-43f0-9a14-a22f2e1226a7":{"name":"red_cat_3","sourceUrl":null,"frameSize":{"x":191,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"m.4ve7oqjuZHthh8OrFpfACUzdulHfFz","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":300},"rootRelativePath":"assets/8b2431b5-ffee-43f0-9a14-a22f2e1226a7.png"},"3ba3a545-2834-45ee-8512-c0dd5ba4c3aa":{"name":"green_cat_1","sourceUrl":null,"frameSize":{"x":166,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"vwfT0BP5RCtCjmxsY7FpL_kx.GupgY7m","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":166,"y":300},"rootRelativePath":"assets/3ba3a545-2834-45ee-8512-c0dd5ba4c3aa.png"},"a6e0a983-390a-42f8-9059-9aa49c44402d":{"name":"cheese_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png","frameSize":{"x":379,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"BnRZRFpznzKZ.5IPc97zl99rHJyU2geK","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":379,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png"}}};
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

var life = 5;
var cat1, cat2, cat3,cat4;
var boundary1, boundary2;
var mouse;
var cheese;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  cheese = createSprite(360, 180, 1, 1);
  cheese.setAnimation("cheese_1");
  cheese.scale = 0.1;
  
  mouse = createSprite(20,190,13,13);
  mouse.shapeColor = "green";
  mouse.setAnimation("mouse_1");
  mouse.scale = 0.5;
  
  cat1 = createSprite(100,130,10,10);
  cat1.shapeColor = "red";
  cat1.setAnimation("brown_cat_1");
  cat1.scale = 0.1;
  
  cat2 = createSprite(215,130,10,10);
  cat2.shapeColor = "red";
  cat2.setAnimation("orange_cat_1");
  cat2.scale = 0.1;
  
  cat3 = createSprite(165,250,10,10);
  cat3.shapeColor = "red";
  cat3.setAnimation("yellow_cat_2");
  cat3.scale = 0.1;
  
  cat4 = createSprite(270,250,10,10);
  cat4.shapeColor = "red";
  cat4.setAnimation("red_cat_3");
  cat4.scale = 0.1;
  
  cat1.velocityY = 4;
  cat2.velocityY = 4;
  cat3.velocityY = -4;
  cat4.velocityY = -4;


playSpeech("hello! my name is nocky the mouse.", "male", "English");
playSpeech("I have to go to my home and eat my breakfast", "male", "English");
playSpeech("but,the problem is i have been attacked by a gangof cats and not letting to go to my home", "male", "English");
playSpeech("please help me out in this danger situation", "male", "English");

function draw() {
  background("white");
  
  text("Lives: " + life,200,100);
  
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  cat1.bounceOff(boundary1);
   cat1.bounceOff(boundary2);
   cat2.bounceOff(boundary1);
   cat2.bounceOff(boundary2);
   cat3.bounceOff(boundary1);
   cat3.bounceOff(boundary2);
   cat4.bounceOff(boundary1);
   cat4.bounceOff(boundary2);
   
   if(keyDown("right")){
     mouse.x = mouse.x+4;
   }
   ;if(keyDown("left")){
     mouse.x = mouse.x-4;
   }

if (mouse.isTouching(cat1)||
    mouse.isTouching(cat2)||
    mouse.isTouching(cat3)||
    mouse.isTouching(cat4)){
    reset();
    life = life-1;
}

if (life == 0) {
  textSize(16);
  fill("darkred");
  text("gameover! You have lost all your lives", 120, 80);
  mouse.velocityY = 0;
  mouse.velocityY = 0;
  mouse.velocityY = 0;
  mouse.velocityY = 0;
  reset();
}
  if (mouse.isTouching(cheese)) {
    text("You Won!", 200, 50);
  }
 drawSprites();
}

function reset() {
  mouse.x = 20;
  mouse.y = 190;
  
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
