const buttonColours=["red", "blue", "green", "yellow"];
let level=0;
let started=false;
var gamePattern=[];
var userClickedPattern=[];
function nextSequence(){
    userClickedPattern=[];
    let randomNumber;
    level++;
    randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("h1").text("level "+level);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColour);
}
    $(".btn").click(function(e){
        var userChosenColour;
       userChosenColour=e.target.id;
       userClickedPattern.push(userChosenColour);
       animatePress(userChosenColour);
       playSound(userChosenColour);
       checkAnswer(userClickedPattern.length-1);
    })
    function playSound( name){
        var audio=new Audio('sounds/'+name+'.mp3');
        audio.play();
    }
    function animatePress(currentColour){
      $('.'+currentColour).addClass("pressed");
      setTimeout(function(){
          $('.'+currentColour).removeClass("pressed");
      },100);

    }
    $(document).on('keypress',function(){
        if (!started) {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
          }
    })
    function checkAnswer(currentLevel){
      
            if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
            {
                if(gamePattern.length==userClickedPattern.length){
                setTimeout(function(){
                nextSequence();
                },1000)
            }
            }
            else{
                $("body").addClass("game-over");
                var playing=new Audio('sounds/wrong.mp3');
                playing.play();
                $("h1").text("Game Over, Press Any Key to Restart");
                setTimeout(function(){
                    $("body").removeClass("game-over");
                },200)
                startOver();
            }
        }
        function startOver(){
            level=0;
            gamePattern=[];
            started=false;
        }
   