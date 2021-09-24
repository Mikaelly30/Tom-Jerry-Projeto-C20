var bgImg, gato, rato;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    gatoImg1 = loadAnimation("cat1.png");
    ratoImg1 = loadAnimation("mouse1.png");
    gatoImg2 = loadAnimation("cat2.png", "cat3.png");
    ratoImg2 = loadAnimation("mouse2.png", "mouse3.png");
    gatoImg3 = loadAnimation("cat4.png");
    ratoImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    gato = createSprite(800, 600);
    gato.addAnimation("gatoSentado", gatoImg1);
    gato.addAnimation("gatoAndando", gatoImg2);
    gato.addAnimation("gatoEmPe", gatoImg3);
    gato.scale = 0.2;
    gato.setCollider("rectangle",0,0,gato.width/2,gato.height/2);
    gato.debug = false;

    rato = createSprite(150, 600);
    rato.addAnimation("ratoComQueijo", ratoImg1);
    rato.addAnimation("ratoAnimado", ratoImg2);
    rato.addAnimation("ratoComLupa", ratoImg3);
    rato.scale = 0.1;
    rato.setCollider("rectangle",0,0,rato.width/2,rato.height/2);
    rato.debug = false;

}

function draw() {
    keyPressed();

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        rato.changeAnimation("ratoComLupa",ratoImg3);
        gato.changeAnimation("gatoEmPe",gatoImg3);
        gato.velocity = 0;
    }
 
    

    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here


  
  if(keyCode === LEFT_ARROW){
    
    rato.changeAnimation("ratoAnimado", ratoImg2);
    rato.frameDelay = 25;

    gato.changeAnimation("gatoAndando", gatoImg2);
    gato.frameDelay = 25;
    
    gato.x = gato.x-2
}

}
