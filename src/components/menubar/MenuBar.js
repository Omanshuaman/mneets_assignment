import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import Chevron from "../../assests/chevron-left.svg";
import HomeLogo from "../../assests/home.svg";
import FeedbackLogo from "../../assests/feedback.svg";
import PiechartLogo from "../../assests/pie-chart.svg";
import DataLogo from "../../assests/data.svg";
import RegionLogo from "../../assests/region.svg";
import SettingsLogo from "../../assests/settings.svg";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const toggleSidebar = () => {
    const sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("visible");
  };
  return (
    <>
      <div
        className={`w3-sidebar ${isSidebarOpen ? "" : "hidden"}`}
        id="mySidebar"
      >
        <div className="logo">AttiUttam</div>
        <div className="collapse-svg">
          <img
            src={Chevron}
            alt="Your SVG"
            onClick={toggleSidebar}
            className="collapse-svg-child"
          />
        </div>
        <div className="w3-bar-item">
          <img src={HomeLogo} alt="Your SVG" className="home-svg" />

          <div className="name-tag">Home</div>
        </div>
        <div>
          <div className="w3-bar-item">
            <img src={FeedbackLogo} alt="Your SVG" className="home-svg" />
            <div className="name-tag">Feedback</div>
          </div>
        </div>

        <div>
          <div className="w3-bar-item">
            <img src={PiechartLogo} alt="Your SVG" className="home-svg" />
            <div className="name-tag">Time Spent</div>
          </div>
        </div>
        <div>
          <div className="w3-bar-item">
            <img src={DataLogo} alt="Your SVG" className="home-svg" />
            <div className="name-tag">Data Management</div>
          </div>
        </div>
        <div>
          <div className="w3-bar-item">
            <img src={RegionLogo} alt="Your SVG" className="home-svg" />
            <div className="name-tag">Region</div>
          </div>
        </div>
        <div>
          <div className="w3-bar-item">
            <img src={SettingsLogo} alt="Your SVG" className="home-svg" />
            <div className="name-tag">Settings</div>
          </div>
        </div>
      </div>

      <FcMenu className="w3-teal" onClick={toggleSidebar} />
    </>
  );
};

export default MenuBar;
