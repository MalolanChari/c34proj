var brush,database,pos,brush_pos,position;
var paint = [];

function setup(){
    createCanvas(500,500);
    brush = createSprite(250,250,10,10);
    brush.shapeColor = "black";

    database=firebase.database();
    brush_pos = database.ref('paint/position');
    brush_pos.on("value",readPos,showerror);

}

function draw(){
    background("white");

    if(paint =[]){
        position = [brush.x,brush.y];
        writePosition();
       paint.push(position);
      }
     
  
      for(var i=0; i<paint.length; i++){
        var color = createSprite(paint[i][0], paint[i][1],10,10);
        
        color.shapeColor = "red";
      }
  
    drawSprites();
}

function writePosition(){
    brush_pos2 = database.ref('ball/position');
    brush_pos2.set({
        'x':position[0],
        'y':position[1],
 
    })
}
function mouseDragged(){
    brush.x=mouseX;
    brush.y=mouseY;

}
function readPos(data){
    pos = data.val();
    brush.x=position[0];
    brush.y = position[1];

}

function showerror(){
    console.log("there is an error")
}

