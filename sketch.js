var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces using sprites
    surface1 = createSprite(100,580,200,20);
    surface1.shapeColor = "Maroon";

    //STEP 1:
    //Create all surfaces using sprite
    

    box = createSprite(random(10,790),50,20,20);
    //Give velocity for ball to move


    edges = createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    box.bounceOff(edges);

    //var_name.play(); to play the music

    if(box.bounceOff(surface1)){
    
        box.shapeColor = surface1.shapeColor;
        
    }

    //Repeat the same step for every other surface

    // To stop the ball at surface 2
    /*else if(box.isTouching(surface2)){

    }*/
    

    drawSprites();


}
