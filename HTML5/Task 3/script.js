let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let audioPlayer = document.getElementById("audioPlayer");
let volumeControl = document.getElementById("volumeControl");
let DurationControl = document.getElementById("DurationControl");
let albumArt = document.getElementById("albumArt");

function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}

function stopAudio() {
   
    audioPlayer.load();
    audioPlayer.pause();
    
      
   
}

function changeSong(audioSrc, imageSrc = "") {
    audioPlayer.src = audioSrc;
     audioPlayer.load();
    audioPlayer.play();
    albumArt.src = imageSrc;
    
}

volumeControl.addEventListener('input', function() {
    audioPlayer.volume = volumeControl.value;
});

audioPlayer.addEventListener('timeupdate', function() {
    DurationControl.max = audioPlayer.duration;
    DurationControl.value = audioPlayer.currentTime;
});

DurationControl.addEventListener('input', function() {
    audioPlayer.currentTime = DurationControl.value;
});




