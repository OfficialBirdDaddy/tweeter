$(document).ready(function() {

  const maxChars = 140;
  $('#tweet-text').on("input", function() {
    
    const charNumber = ($(this).val().length);
    
    $('.counter').text(maxChars - charNumber);

    if (charNumber > maxChars) { //changes colour to red if over max chararacters
      $('.counter').addClass('alert');
    }

    if (charNumber <= maxChars) { //changes colour back to black if under max characters
      $('.counter').removeClass('alert');
    }

  })
});