/**
 * Game.cookies
 * Game.UpgradesById[0].getPrice()
 */

window.assetPath =  window.assetPath || 'ai/';

let bigBrain = new BigBrain();
bigBrain.train(Data.MasterMind.training);

let smallBrain = new SmallBrain();

let n;
function go(timer = 200) {
    n = setInterval(function(){
        Utils.initCoordinates();
        bigBrain.play();
    }, timer);
}


function goSmallBrain(timer = 200) {
    n = setInterval(function(){
        Utils.initCoordinates();
        smallBrain.play();
    }, timer);
}

function playOnce() {
    Utils.initCoordinates();
    bigBrain.play();
}

function stop() {
    clearInterval(n);
}

let canvas;

function preLoad() {
    
}

function setup() {
    canvas = new Canvas();
    bigBrain.spawn(windowWidth/2,windowHeight/2);
    smallBrain.spawn(windowWidth/2 - 50,windowHeight/2 + 40)
}

function draw() {
    clear();
    bigBrain.draw();
    smallBrain.draw();
}

function windowResized() {
    Utils.initCoordinates(true);
    resizeCanvas(windowWidth, windowHeight);
    bigBrain.position(windowWidth/2,windowHeight/2);
}