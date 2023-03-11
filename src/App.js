import "./App.css";
import Chevron from "./assests/chevron-left.svg";
import HomeLogo from "./assests/home.svg";
import FeedbackLogo from "./assests/feedback.svg";
import PiechartLogo from "./assests/pie-chart.svg";
import DataLogo from "./assests/data.svg";
import RegionLogo from "./assests/region.svg";
import SettingsLogo from "./assests/settings.svg";
import SearchLogo from "./assests/search.svg";
import DropdownLogo from "./assests/dropdown.svg";
import ChevronUpLogo from "./assests/chevron-up.svg";
import { FcMenu } from "react-icons/fc";

import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const toggleSidebar = () => {
    const sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("visible");
  };

  return (
    <div className="App">
      <div className="search">
        <div className="search-child">
          <div className="search-button">
            <img src={SearchLogo} alt="Your SVG" className="search-svg" />
          </div>
          <div className="search-dropdown">
            <div className="search-dropdown-user">
              <div className="search-dropdown-username">
                <div className="search-dropdown-username-logo">
                  <img
                    src={DropdownLogo}
                    alt="Your SVG"
                    className="search-svg"
                  />
                </div>
                <div className="search-dropdown-username-name">USER</div>
              </div>
              <div className="search-dropdown-logo">
                <img
                  src={ChevronUpLogo}
                  alt="Your SVG"
                  className="search-svg"
                />
              </div>
            </div>
            <div className="search-dropdown-button"></div>
          </div>
        </div>
        <div className="search-line"></div>
      </div>
      <div className="heroframe">
        <div className="heroframe-child1">
          <div className="heroframe-region-child2">Region</div>

          <div className="heroframe-region-child1"></div>
        </div>
        <div className="heroframe-child2">
          <div className="heroframe-child2-child1">
            <div className="heroframe-child2-child1-child1"></div>
            <div className="heroframe-child2-child1-child2"></div>
          </div>
        </div>
      </div>

      <div
        className={`w3-sidebar w3-bar-block w3-border-right ${
          isSidebarOpen ? "" : "hidden"
        }`}
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
    </div>
  );
}

export default App;
