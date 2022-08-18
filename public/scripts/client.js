/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//
//TESTING
//

$(() => {

  //
  // FUNCTIONS
  //
  
  // AJAX request to get data from server

  $('#compose-tweet').submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    const tweetData = data.slice(6);
    
    if(!tweetData) {
      $('.empty-tweet').slideDown();
      return;
    }

    if (tweetData > 140) {
      $('.too-long').slideDown();
      return;
    }

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: data,
  }).then(() => {
    loadTweets();
    $('.empty-tweet').slideUp();
    $('.too-long').slideUp();
    $('#tweet-text').val('');
  });
});
  
// Function to render tweets on app

  const renderTweets = (tweets) => {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    };
  };


// Function to create a tweet element using predefined HTML elements

  const createTweetElement = function (tweetObj) { 
    console.log(tweetObj);
    const $tweet = $('<article>').addClass('tweet');

    const $img = $('<img>').attr('src', tweetObj.user.avatars);
    const $name = $('<h3>').text(tweetObj.user.name);
    const $username = $('<h4>').text(tweetObj.user.handle);

    const $div = $('<div>').append($img).append($name);
    const $usernameDiv = $('<div>').append($username);

    const $header = $('<header>')
      .addClass('tweet-header')
      .append($div).append($usernameDiv);

    $tweet.append($header);

    const $tweetContent = $('<p>').text(tweetObj.content.text);
    const $div2 = $('<div>').addClass('tweet-body').append($tweetContent);

    $tweet.append($div2);

    const $timeCreated = $('<span>').text(
      timeago.format(tweetObj.created_at)
    );

    const $heartIcon = $('<i>').addClass('fa-solid fa-heart');
    const $retweetIcon = $('<i>').addClass('fa-solid fa-retweet');
    const $replyIcon = $('<i>').addClass('fa-solid fa-reply');
  
    const $div3 = $('<div>')
      .append($heartIcon)
      .append($retweetIcon)
      .append($replyIcon);

    const $footer = $('<footer>')
      .addClass('tweet-footer')
      .append($timeCreated)
      .append($div3);

    $tweet.append($footer);

    return $tweet;

  };

  const loadTweets = () => {
    $.get('/tweets', (data) => {
      renderTweets(data);
    });
  };

  loadTweets();

});