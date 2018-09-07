
$(document).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //  Interval Demonstration
    //  Set our number counter to 30 seconds.
    var number = 41;
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
      $("#button").hide();
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

      if(value=true) {
        correct++;
      }else if(value=false) {
        incorrect++;
      }else if(value=null){
          unanswered++;
      } 

      $("h2").hide();
      $("form").hide();
  

      clearInterval(intervalId);
      $("#show-results").html(
          "<h2>Correct answers:" + correct + "</h2>" +
          "<h2>Incorrect answers:" + incorrect + "</h2>" +
          "<h2>Unanswered:" + unanswered + "</h2>"
          
    );

  
    }
    //  Execute the run function.
    


})



// 1. When the page loads, a Start button should display. 
// 2. When gameStart Button is pressed, start timer and display quiz. 
// 3. Quiz buttons need to be pressed, only 1 can be chosen per line. 
// 4. When Timer runs out, display the .stop function. Displays the correct answers, incorrect answers, and unanswered questions. 
// 5. The page can be reloaded in the browser window. 