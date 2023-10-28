const audio = new Audio("build/audio/honoluluMarch.mp3");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");
let isMuted = true;

function toggleMute() {
  if (isMuted) {
    audio.muted = false;
    muteIcon.src = "build/icons/Play.png";
  } else {
    audio.muted = true;
    muteIcon.src = "build/icons/Mute.png";
  }
  isMuted = !isMuted;
}

audio.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

muteButton.addEventListener("click", toggleMute);

audio.play();
