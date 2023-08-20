var color=["red","blue","green","yellow"];
var userClickedPattern=[];
var gamePattern=[];
$(".btn").click(handler);
var started=false;
var level=0;
function nextSequence(){
     userClickedPattern=[];
    
    $("#level-title").text("Level "+level);
    var rand= Math.random();
    rand=rand*4;
    rand=Math.floor(rand);
    
    var randomChosenColor=color[rand];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColor);
    
    
}
function handler(){
    var userChosenColour=$(this).attr("id");
    level=level+1;
    
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    console.log(gamePattern);
    checkAnswer(userClickedPattern.length-1);
    
   // $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    timeOut(userChosenColour)
    makeSound(userChosenColour);
    
}
function timeOut(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
   
}
function makeSound(name){
    var audio = new Audio("sounds/"+name + ".mp3");
        audio.play();
    }
       

$(document).keyup(function(){
    if (!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started= true;
    }
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        
        if (userClickedPattern.length === gamePattern.length){

         
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else{
        $("#level-title").text("Game Over, Press Any Key to Restart");
        console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        audio.play();
        startOver();
        
    }
}
function startOver(){
    gamePattern=[];
    started=false;
    level=0;

    
}