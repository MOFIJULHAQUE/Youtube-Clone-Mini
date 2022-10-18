import React from "react";
import download from "../ima-ge/download.png"
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <i class="fa-solid fa-bars"></i>
          <img src={download} alt="download"/>
        </div>

        <div className="header-middle">
          <input type="text" placeholder="Search" />
          <div className="glass">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="mic">
            <i class="fa-sharp fa-solid fa-microphone"></i>
          </div>
        </div>

        <div className="header-right">
          <i class="fa-solid fa-video"></i>
          <i class="fa-regular fa-bell"></i>
          <div className="profile"> <h1>P</h1></div>
        </div>

        
      </div>

    </>
  );
}

export default Header;
