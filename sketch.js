//Create variables here
var dog, happyDog, database, foodS, foodStock
var dogimg,happyDogimg
function preload()
{
  //load images here
  dogimg = loadImage("dog.png")
  happyDogimg = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,250,10,10)
  dog.addImage(dogimg)
  dog.scale = 0.1

  

foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46, 139, 87) ;
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogimg)
  foodS = foodS-1
  
}

  drawSprites();
  //add styles here

  fill("white")
  text("Food remaining: " + foodS, 210,300)
}

function writeStock(x){
  
  if(x <= 0){
    x = 0
  }
  else{
    x = x-1
  }
  database.ref('/').set({
    Food:x
  })
}

function readStock(data){
foodS = data.val();
}




