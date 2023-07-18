import { bottonPause, bottonPlay } from "./element.js";
import { hendleToggleDisplayElement } from "./utils.js";

bottonPlay.addEventListener("click", hendleToggleDisplayElement);
bottonPause.addEventListener("click", hendleToggleDisplayElement);
