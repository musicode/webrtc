navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.moZGetUserMedia || navigator.msGetUserMedia;
var video = document.querySelector('video');
var videoConfig = {

};

navigator.getUserMedia(
    {
        audio : videoConfig,
        video : true
    },
    function (stream) {
        video.src = window.URL.createObjectURL(stream);
    },
    function (error) {
        console.log(error);
    }
);

function enumerateDevices() {
  return navigator.mediaDevices.enumerateDevices().then(
    function (devices) {

      var micList = [ ];
      var speakerList = [ ];
      var cameraList = [ ];

      devices.forEach(
        function (device) {
          var item = {
            deviceId: device.deviceId,
            groupId: device.groupId,
            label: device.label,
          };
          switch (device.kind) {
            case 'audioinput':
              micList.push(item);
              break;
            case 'audiooutput':
              speakerList.push(item);
              break;
            case 'videoinput':
              cameraList.push(item);
              break
          }
        }
      );

      return {
        micList: micList,
        speakerList: speakerList,
        cameraList: cameraList,
      };

    }
  )
}

