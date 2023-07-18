import { bottonPause, bottonPlay } from "./element.js";

export function hendleToggleDisplayElement() {
  bottonPlay.classList.toggle("hide");
  bottonPause.classList.toggle("hide");
}
