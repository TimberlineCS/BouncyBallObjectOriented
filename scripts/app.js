window.requestAnimationFrame(moveBalls);
document.body.style.backgroundColor = "black";


var ball1 = new ball();
var ball2 = new ball();
var ball3 = new ball();
var ball4 = new ball();
var ball5 = new ball();

ball1.getBall().addEventListener("click", addScore);
ball2.getBall().addEventListener("click", addScore);
ball3.getBall().addEventListener("click", addScore);
ball4.getBall().addEventListener("click", addScore);
ball5.getBall().addEventListener("click", addScore);

function moveBalls(){
    ball1.moveBall();
    ball2.moveBall();
    ball3.moveBall();
    ball4.moveBall();
    ball5.moveBall();
    window.requestAnimationFrame(moveBalls);
}

function addScore(e){
    var newScore = Number(e.target.value) + Number(e.target.innerHTML);
    e.target.innerHTML = newScore;
}

