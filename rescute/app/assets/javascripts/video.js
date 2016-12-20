
// video implementation from Google's API IFRAME Page
//https://developers.google.com/youtube/iframe_api_reference#Getting_Started
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.





var player;
var vidId;



function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: vidId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}
//The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for five seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
   setTimeout(stopVideo, 5000);
   done = true;
     }
   }
function stopVideo() {
  player.stopVideo();
}


// var buton = document.getElementById("vidSearch").val()
// console.log(buton)




//  $('#search').click(function(event) {
//   event.preventDefault()
//   var searchVal = $('#vidSearch').val()
//   console.log(searchVal)
//   $.ajax({
//   "url": "/getjs",
//   "method": "GET",
//   data:{searchVal: searchVal}
// }).done(function(data){
//  vidId = data
//   console.log(data)
// })




  // $.ajax({
  //       url : "/video",
  //       type : "post",
  //       data : { search: JSON.stringify(searchVal) }
  //   });
// });
//sending stuff to rails

