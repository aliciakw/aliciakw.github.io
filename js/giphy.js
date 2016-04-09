$(document).ready(function(){
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: 'alicia',
      api_key: 'dc6zaTOxFJmzC',
      limit: 3
    },
    success: function(response){
      var gif = document.createElement('img');
      var src = "http://i.giphy.com/" + response.data[0].id + ".gif";
      gif.setAttribute('height', '225px');
      gif.setAttribute('src', src);
      $('#gif-target').append(gif);
    },
    error: function(){
      console.log("ERROR getting GIF");
    }
  });
});
