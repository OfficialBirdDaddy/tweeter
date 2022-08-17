/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Function to create a tweet element using predefined HTML elements

const createTweetElement = (tweetObj) => { 
  console.log(tweetObj);
  const $tweet = $('<article>').addClass('tweet');

  const $img = $('<img>').attr('src', tweetObj.user.avatars);
  const $name = $('<h3>').text(tweetObj.user.name);
  const $username = $('<h4>').text(tweetObj.user.username);

  const $div = $('<div>').append($img).append($name);
  const $h4 = $('<h4>').append($username);

  const $header = $('<header>').append($div).append($h4);

  $tweet.append($header);

  const $tweetContent = $('<p>').text(tweetObj.content.text);
  const $div2 = $('<div>').addClass('tweet-body').append($tweetContent);

  $tweet.append($div2);

  
}