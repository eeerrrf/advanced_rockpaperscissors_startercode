$(document).ready(function(){
      
        $("#1winner").hide();

$("#2winner").hide();
      
$("#reset").click(location.reload);



var interval;

function stopTimer() {
    clearInterval(interval);
}

interval = setInterval(function() {
    updateTime();
}, 1000);


var minute=0;
var second=0;
function updateTime(){
    
second=second+1;

if(second===60){
    minute=minute+1;
    second=second-60;
}



$("#timer").html(second);
$("#minutes").html(minute);


}


        
        var game;
        
        var score=0;
        
        var otherscore=0;
        
$(".rock").click(function(){
        $(".rps").html("rock");
        
              var rpsgame =["rock", "paper","scissor"];
   rpsgame.length = Math.floor(Math.random()*3);
        
        console.log(rpsgame.length);
          game= 0;
          
        if(game===rpsgame.length){
                $(".wins").html("User ties");
                $(".pc").html("rock")
        }
        
       else if(game+1===rpsgame.length){
                $(".wins").html("User losses");
                $(".pc").html("paper")
                 $(".it").html(otherscore=otherscore+1);
        }
        
        else if(game+2===rpsgame.length){
                $(".wins").html("User wins");
                $(".pc").html("scissor");
                $(".you").html(score=score+1);
        }
        
                 if(score>otherscore){
    $(".ahead").html("You are ahead!");
}

         if(otherscore>score){
    $(".ahead").html("You are behind!");
}
               
if(score===10){
    $(".winner").html("You won, congratulations!")
    $("#1winner").show()
}

if(otherscore===10){
    $(".winner").html("You lost, better luck next time, here is a trophy for participation.")
    $("#2winner"). show ()
}

if(otherscore ===10 && score===10){
    $(".winner").html("Well ladies and gentlemen, it looks like we have a tie!!!!")
}

          
});

$(".paper").click(function(){
        $(".rps").html("paper");
        
              var rpsgame =["rock", "paper","scissor"];
   rpsgame.length = Math.floor(Math.random()*3);
        
                console.log(rpsgame.length);
        
        game= 1;
        
        if(game===rpsgame.length){
                $(".wins").html("User ties");
                 $(".pc").html("paper")
        }
        
        if(game+1===rpsgame.length){
                $(".wins").html("User losses");
                 $(".pc").html("scissor")
                 $(".it").html(otherscore=otherscore+1);
        }
        
        if(game-1===rpsgame.length){
                $(".wins").html("User wins");
                 $(".pc").html("rock")
                 $(".you").html(score=score+1);
        }
        
         if(score>otherscore){
    $(".ahead").html("You are ahead!");
}

         if(otherscore>score){
    $(".ahead").html("You are behind!");
}

if(score===10){
    $(".winner").html("You won, congratulations!")
    $("#1winner").show()
}

if(otherscore===10){
    $(".winner").html("You lost, better luck next time, here is a trophy for participation.")
    $("#2winner"). show ()
}

if(otherscore ===10 && score===10){
    $(".winner").html("Well ladies and gentlemen, it looks like we have a tie!!!!")
}                 
        
});

$(".scissor").click(function(){
        $(".rps").html("scissor");
        
              var rpsgame =["rock", "paper","scissor"];
   rpsgame.length = Math.floor(Math.random()*3);
        
                console.log(rpsgame.length);
        
        game = 2;
        
        if(game===rpsgame.length){
                $(".wins").html("User ties");
                 $(".pc").html("scissor")
        }
        
        if(game-2===rpsgame.length){
                $(".wins").html("User losses");
                 $(".pc").html("rock")
                 $(".it").html(otherscore=otherscore+1);
        }
        
        if(game-1===rpsgame.length){
                $(".wins").html("User wins");
                $(".pc").html("paper")
                 $(".you").html(score=score+1);
        }

         if(score>otherscore){
    $(".ahead").html("You are ahead!");
}

         if(otherscore>score){
    $(".ahead").html("You are behind!");
}

if(score===10){
    $(".winner").html("You won, congratulations!")
    $("#1winner").show()
}

if(otherscore===10){
    $(".winner").html("You lost, better luck next time, here is a trophy for participation.")
    $("#2winner"). show ()
}

if(otherscore ===10 && score===10){
    $(".winner").html("Well ladies and gentlemen, it looks like we have a tie!!!!")
}


});

});
//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION

