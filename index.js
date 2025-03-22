var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColor[randomNumber()];
gamePattern.push(randomChosenColour);


function randomNumber() {
  return Math.floor(Math.random() * 4);
}

$("#red").fadeOut(200).fadeIn(100).fadeOut(100).fadeIn(100);
$(document).on("click", function() {
  var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
  sound.play();
  $("h1").text("Level 1");
});


$(".btn").click(function() {
   var userChosenColour = $(this).attr("id");
   var sound = new Audio("sounds/" + userChosenColour + ".mp3");
   sound.play();
});

  
function playSound(name) {
   var sound = new Audio("sounds/" + name + ".mp3");
   sound.play();
}

// Removed duplicate nextSequence function


function animatePress(currentColour) {
 

   $("#" + currentColour).addClass("pressed");
   setTimeout(function() {
      $("#" + currentColour).removeClass("pressed");
   }, 500);
}
var level = 0;
$(document).on("keydown", function() {
   if (level === 0) {
      nextSequence();
   }
});

function nextSequence() {
   level++;
   $("h1").text("Level " + level);
   var randomChosenColour = buttonColor[randomNumber()];
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeOut(200).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}
  