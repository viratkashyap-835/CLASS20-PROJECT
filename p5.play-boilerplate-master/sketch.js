var car,wall;
var speed,weight;

function setup(){
  createCanvas(1600,400);
  speed=random(55,155);
  weight=random(400,1500);
  wall=createSprite(1500,350,100,height/2);
  car=createSprite(20,350,30,30);
 
  car.velocityX=speed;
  wall.shapeColor="black";
  car.shapeColor="white";
}

function draw(){
  background(rgb(80,80,80));
  if(wall.x-car.x<=(car.width/2+wall.width/2)){
    car.velocityX=0;
    
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor="red";
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    else if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}