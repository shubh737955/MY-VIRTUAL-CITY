var b1, b2;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=1;
  b1.floors=24;
  
  b2=new Building();
  b2.position=0.1;
  b2.floors=12;
  
  b3=new Building();
  b3.position=1.9;
  b3.floors=36;
  
  b4=new Building;
  b4.position=2.7;
  b4.floors=48;
  
    b5=new Building();
  b5.position=3.5;
  b5.floors=12;
  
    b6=new Building();
  b6.position=4.3;
  b6.floors=24;
  
  b7=new Building();
  b7.position=5.1;
  b7.floors=36;
  
  b8=new Building();
  b8.position=5.9;
  b8.floors=29;
  
  b9=new Building();
  b9.position=6.7;
  b9.floors=40;
  
  b10=new Building();
  b10.position=7.5;
  b10.floors=10;
  
  
 
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
}