var fundo;
var gato, gatoImg1, gatoImg2, gatoImg3;
var rato, ratoImg1, ratoImg2, ratoImg3;
function preload() {
    //load the images here
    fundo = loadImage("garden.png");

    gatoImg1 = loadAnimation("cat1.png");
    gatoImg2 = loadAnimation("cat2.png","cat3.png");
    gatoImg3 = loadAnimation("cat4.png");

    ratoImg1 = loadAnimation("mouse1.png");
    ratoImg2 = loadAnimation("mouse2.png","mouse3.png");
    ratoImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    gato = createSprite(870,600);
    gato.addAnimation("catSitting",gatoImg1);
    gato.scale = 0.2;
    
    rato = createSprite(200,600);
    rato.addAnimation("mouseStanding",ratoImg1);
    rato.scale  = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if cat and mouse 
    if(gato.x - rato.x < (gato.width - rato.width)/2)
    { 
        gato.velocityX = 0;
        gato.addAnimation("ultimaImagemdoGato", gatoImg3);
        gato.x =300;
        gato.changeAnimation("ultimaImagemdoGato");

        rato.addAnimation("ultimaImagemdoRato", ratoImg3);
        rato.changeAnimation("ultimaImagemdoRato");
    }  

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


    if(keyCode === LEFT_ARROW){
        gato.velocityX = -5; 
        gato.addAnimation("gatoCorrendo", gatoImg2);
        gato.changeAnimation("gatoCorrendo");
        
        rato.addAnimation("ratoTeasing", ratoImg2);
        rato.changeAnimation("ratoTeasing");
    

    }
}