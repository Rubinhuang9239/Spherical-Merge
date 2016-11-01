var userMedia = {}

userMedia.init = function(){

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


  function successCallback(stream) {

    var video = document.getElementById("thetaVideo");

            // stream available to console so you could inspect it and see what this object looks like
            window.stream = stream;
            if (window.URL) {
              video.src = window.URL.createObjectURL(stream);
            } else {
              video.src = stream;
            }
            video.play();
    }

    function errorCallback(error) {
      console.log("navigator.getUserMedia error: ", error);
    }

    navigator.getUserMedia( //launch
                          {
                            video : {optional:[ {minHeight:1920}, {minWidth:1080} ]}, // maximun for Ricoh(HD)
                            audio: false,
                          }, 
                          successCallback,
                          errorCallback
                        );
}
