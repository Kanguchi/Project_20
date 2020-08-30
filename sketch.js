var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 100, 50);
  car.shapeColor = "white";
  car.velocityX = speed;
  
  //console.log(deformation);

  wall = createSprite(1500, 200, 60, 200);


}

function draw() {
  background(0, 0, 0); 

  if (wall.x - car.x < wall.width/2 + car.width/2){
    car.veloxityX = 0;

    var deformation = (0.5 * weight * speed * speed)/22500;

    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);    
    } 
    if (180 > deformation && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation < 100){
      car.shapeColor = color(0, 255, 0);
    }
    
  }
  car.collide(wall);
  drawSprites();
}  