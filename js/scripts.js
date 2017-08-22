

// user interface logic
$(document).ready(function() {

 $("form#initial-submit").submit(function(event){
    event.preventDefault();

    var name = $("#name").val();
    var initialDeposit = $("#initial-deposit").val();

    });

  $("form#add-withdrawl").submit(function(event){
    event.preventDefault();


     var newDeposit = $("#new-deposit").val();
     var newWithdrawl = $("#new-withdrawl").val();

   });
   $("")
});
