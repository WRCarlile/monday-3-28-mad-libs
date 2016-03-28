$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks= ["item1", "item2", "item3", "item4", "item5", "item6"];
    var array = [];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      // $("#" + blank).text(userInput);
      userInput = userInput.toUpperCase();
      array.push(userInput);


      // $(userInput).toUpperCase();
      // userInput.sort();
      console.log(userInput);
      $('#list').append("<li>" + userInput + "</li>");

    // });
  });
    array = array.sort();
    $("#show, #list").show();
    $('#blanks').hide();

    event.preventDefault();
  });
});
