const audio = new Audio("audio/honoluluMarch.mp3");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");
let isMuted = true;

function toggleMute() {
  if (isMuted) {
    audio.muted = false;
    muteIcon.src = "icons/Play.png";
  } else {
    audio.muted = true;
    muteIcon.src = "icons/Mute.png";
  }
  isMuted = !isMuted;
}

audio.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

muteButton.addEventListener("click", toggleMute);

audio.play();
