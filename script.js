var main = function () {
   $("form").submit(function(event) {
      //when form is submited get text and store to variable
      var $input = $(event.target).find("input");
      var comment = $input.val();

      if (comment != " ") {
         //create a new li with text of comment inside
         var html = $("<li></li>").text(comment)
         //insert text to comment section
         html.prependTo("#comments");
         //clear input bar
         $input.val(" ");
      }
      //prevent default
      return false;
   });

}

$(document).ready(main);
