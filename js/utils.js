import {
  bottonPause,
  bottonPlay,
  bottonset,
  bottonSoundOff,
  bottonSoundOn,
  bottonstop,
  minutesDisplay,
  secondsDisplay,
} from "./element.js";

export function handleTogglePlayPause() {
  bottonPlay.classList.toggle("hide");
  bottonPause.classList.toggle("hide");
  bottonstop.classList.remove("hide");
  bottonset.classList.add("hide");
}
export function handleToggleStopSet() {
  bottonstop.classList.toggle("hide");
  bottonset.classList.toggle("hide");
  bottonPlay.classList.remove("hide");
  bottonPause.classList.add("hide");
}
export function handleToggleSoundOnAndOff() {
  bottonSoundOn.classList.toggle("hide");
  bottonSoundOff.classList.toggle("hide");
}

function updateTimeDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}
let minutes;
export function handleSetMinutes() {
  minutes = prompt("Quantos minutos?");
  updateTimeDisplay(minutes, 0);
}

//function recursive
function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    if (seconds <= 0) {
      seconds = 10;
      --minutes;
    }
    updateTimeDisplay(minutes, String(seconds - 1));

    if (minutes <= 0 && seconds == 1) {
      handleToggleStopSet();
      return;
    }

    countdown();
  }, 1000);
}

export function handlePlayTimePlay() {
  handleTogglePlayPause();
  if (minutesDisplay.textContent <= 0 && secondsDisplay.textContent == 0) {
    return;
  }
  countdown();
}
