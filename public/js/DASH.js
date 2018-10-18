// https://shaka-player-demo.appspot.com

// just modify .mpd'url if want to change video

window.domain = "baishancloud.com";
initVideo("indexVideo", "https://ss.bscstorage.com/video2017/website/chanpinpian720_MP4.mpd");
initVideo("indexVideo100", "https://ss.bscstorage.com/video2017/website/720/720_MP4.mpd");
function initVideo(videoId, manifestUri) {
  function initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }

  function initPlayer() {
    // Create a Player instance.
    var video = document.getElementById(videoId);
    var player = new shaka.Player(video);

    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;

    // Listen for error events.
    player.addEventListener('error', onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    player.load(manifestUri).then(function() {
      // This runs if the asynchronous load is successful.
      // console.log('The video has now been loaded!');
    }).catch(onError);  // onError is executed if the asynchronous load fails.
  }

  function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
  }

  function onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
  }

  document.addEventListener('DOMContentLoaded', initApp);
}