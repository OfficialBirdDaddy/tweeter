$(document).ready(function() {

  const maxChars = 140;
  $('#tweet-text').keyup(function() {
    
    const charNumber = $(this).val().length;
    
    $('.counter').text(maxChars - charNumber);

    if (charNumber > maxChars) { //changes colour to red if over max chararacters
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }

  })
});