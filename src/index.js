import "./style.css";
import UI from "./modules/UI.js";
import {displayShows, openPopUpWindow, closePopUp} from  "./modules/UI.js"


document.addEventListener("DOMContentLoaded", async () => {
  UI.headerLogo();
  displayShows();
  openPopUpWindow();
  closePopUp();
});
