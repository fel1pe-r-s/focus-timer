import {
  bottonPause,
  bottonPlay,
  bottonset,
  bottonSoundOff,
  bottonSoundOn,
  bottonstop,
} from "./element.js";

import {
  handleSetMinutes,
  handleTogglePlayPause,
  handleToggleSoundOnAndOff,
  handleToggleStopSet,
  handlePlayTimePlay,
} from "./utils.js";

bottonPlay.addEventListener("click", handlePlayTimePlay);
bottonPause.addEventListener("click", handleTogglePlayPause);
bottonstop.addEventListener("click", handleToggleStopSet);
bottonSoundOn.addEventListener("click", handleToggleSoundOnAndOff);
bottonSoundOff.addEventListener("click", handleToggleSoundOnAndOff);
bottonset.addEventListener("click", handleSetMinutes);
