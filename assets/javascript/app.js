

var correct= value="yes";
var incorrect= value="no";
var unanswered= value=null;





$(document).ready(function() {

 $("#btn").on("click", function() {

 })

 //Below is an example how a clicking something can run an additional function. 
 $(".invis-button").on("click", function() {
    $(".captain-planet").animate({
      opacity: "0.05"
    });
  });

})



// When the page loads, a starGame button should display. 
// When gameStart Button is pressed, start timer and display quiz. 
// Quiz buttons need to be pressed, only 1 can be chosen per line. 
// When Timer runs out, display the .gameOver function. Displays the correct answers, incorrect answers, and unanswered questions. 
// The page can be reloaded in the browser window. 