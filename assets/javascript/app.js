
$(document).ready(function() {

    var correct= value="yes";
    var incorrect= value="no";
    var unanswered= value=null;

    //  Interval Demonstration
    //  Set our number counter to 30 seconds.
    var number = 30;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  When the resume button gets clicked, execute the run function.
    $("#button").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      $("#show-results").html(
          "<h2>" + "Correct answers:" + correct + "</h2>",
          "<h2>" + "Incorrect answers:" + incorrect + "</h2>",
          "<h2>" + "Unanswered:" + unanswered + "</h2>",
          
    );

    }
    //  Execute the run function.
    run();


})



// When the page loads, a starGame button should display. 
// When gameStart Button is pressed, start timer and display quiz. 
// Quiz buttons need to be pressed, only 1 can be chosen per line. 
// When Timer runs out, display the .gameOver function. Displays the correct answers, incorrect answers, and unanswered questions. 
// The page can be reloaded in the browser window. 