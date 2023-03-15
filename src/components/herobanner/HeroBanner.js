import "./HeroBanner.css";
import SearchLogo from "../../assests/search.svg";
import React, { useState, useEffect } from "react";

const HeroBanner = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedSubchildren, setSelectedSubchildren] = useState([]);

  const handleButtonClick = (buttonId, label) => {
    setSelectedButton(buttonId);
    const regionMap = {
      MENA: {
        "Middle East": [
          "Southern Middle east",
          "Eastern Middle east",
          "Northern Middle east",
          "Western Middle east",
        ],
        Africa: ["Southern Africa", "Eastern Africa"],
      },
      APAC: {
        Asia: ["China", "India", "Japan"],
        Oceania: ["Australia", "New Zealand"],
      },
      NAC: {
        "North America": ["Canada", "United States"],
        Caribbean: ["Bahamas", "Jamaica", "Trinidad and Tobago"],
      },
      EMEA: {
        Europe: ["France", "Germany", "Italy"],
        "Middle East": ["Israel", "Turkey"],
        Asia: ["Russia"],
      },
    };

    const selectedRegions = regionMap[label] || {};
    setSelectedRegions(Object.keys(selectedRegions));

    const selectedSubchildren = [];
    for (const region in selectedRegions) {
      selectedSubchildren.push(...selectedRegions[region]);
    }
    setSelectedSubchildren(selectedSubchildren);
    console.log(selectedSubchildren);
  };

  const handleRegionClick = (buttonId, regionLabel) => {
    const index = selectedRegions.indexOf(regionLabel);
    if (index === -1) {
      // Region not currently selected, so add it to the list
      setSelectedRegions([...selectedRegions, regionLabel]);

      // Find the parent and child of the clicked region
      const parent = myArray1.find((item) =>
        item.children.find((child) => child.subchildren.includes(regionLabel))
      );
      if (parent) {
        // Set the parent as the selected button
        setSelectedButton(`button-${buttonLabels.indexOf(parent.parent)}`);

        // Set the child as the selected region
        const child = parent.children[0].subchildren.find(
          (subchild) => subchild === regionLabel
        );
        if (child) {
          setSelectedSubchildren([child]);
        }
      }

      // Find the subchildren of the clicked region
      const subchildren = myArray1.flatMap((item) =>
        item.children.flatMap((child) =>
          child.subchildren.filter((subchild) => subchild !== regionLabel)
        )
      );
      setSelectedSubchildren(subchildren);
    } else {
      // Region already selected, so remove it from the list
      const updatedRegions = [...selectedRegions];
      updatedRegions.splice(index, 1);
      setSelectedRegions(updatedRegions);

      // Find the subchildren of the unclicked region
      const subchildren = myArray1.flatMap((item) =>
        item.children.flatMap((child) =>
          child.subchildren.filter(
            (subchild) =>
              updatedRegions.includes(child.child) &&
              !selectedRegions.includes(subchild)
          )
        )
      );
      setSelectedSubchildren(subchildren);
    }
  };

  const buttonLabels = [
    "MENA",
    "APAC",
    "NAC",
    "EMEA",
    "EEMEA",
    "SEMEA",
    "CEMEA",
    "CEE",
  ];

  const regionLabels = [
    "Middle East",
    "Africa",
    "Arabic League",
    "Europe",
    "Asia",
    "North America",
    "Caribbean",
    "Oceania",
  ];
  const myArray1 = [
    {
      parent: "Africa",
      children: [
        {
          subchildren: [
            "Africa",
            "Southern Africa",
            "Eastern Africa",
            "Central Africa",
            "Northern Africa",
          ],
        },
      ],
    },
    {
      parent: "Middle East",
      children: [
        {
          subchildren: [
            "All Middle east ",
            "Southern Middle east",
            "Eastern Middle east",
            "Central Middle east",
            "Northern Middle east",
          ],
        },
      ],
    },
    {
      parent: "Middle East",
      children: [
        {
          subchildren: [
            "All Middle east ",
            "Southern Middle east",
            "Eastern Middle east",
            "Central Middle east",
            "Northern Middle east",
          ],
        },
      ],
    },
    ,
  ];

  const buttons = buttonLabels.map((label, index) => (
    <button
      key={index}
      id={`button-${index}`}
      className={`button ${
        selectedButton === `button-${index}` ? "selected" : ""
      }`}
      onClick={() => handleButtonClick(`button-${index}`, `${label}`)}
    >
      <span className="button-text" onClick={() => console.log({ label })}>
        {label}
      </span>
    </button>
  ));
  const regions = regionLabels.map((label, index) => (
    <button
      key={index}
      id={`button1-${index}`}
      className={`button1 ${
        selectedRegions.includes(label) ? "selected1" : ""
      }`}
      onClick={() => handleRegionClick(`button1-${index}`, `${label}`)}
    >
      <span className="button1-text">{label}</span>
    </button>
  ));

  const regions1 = myArray1.flatMap((region) => region.children[0].subchildren);
  const parents = myArray1.map((item) => item.parent);

  const children = myArray1.map((item) =>
    item.children[0].subchildren.map((subchild) => (
      <button
        key={subchild}
        id={`button1-${subchild}`}
        className={`button1 ${
          selectedSubchildren.includes(subchild) ? "selected1" : ""
        }`}
        onClick={() =>
          handleSubchildClick(`button1-${subchild}`, `${subchild}`)
        }
      >
        <span className="button1-text">{subchild}</span>
      </button>
    ))
  );
  function handleSubchildClick(buttonId, subchild) {
    console.log(subchild);
    const button = document.getElementById(buttonId);
    if (button.classList.contains("selected1")) {
      // subchild is already selected, so deselect it
      button.classList.remove("selected1");
      setSelectedSubchildren((prev) =>
        prev.filter((selectedSubchild) => selectedSubchild !== subchild)
      );
    } else {
      // subchild is not selected, so select it
      button.classList.add("selected1");
      setSelectedSubchildren((prev) => [...prev, subchild]);
    }
  }

  return (
    <div className="heroframe">
      <div className="heroframe-child1">
        <div className="heroframe-region-child2">Region</div>

        <div className="heroframe-region-child1"></div>
      </div>
      <div className="heroframe-child2">
        <div className="heroframe-child2-child1">
          <div className="heroframe-child2-child1-child1">
            <div className="heroframe-child2-child1-child1-regiontext">
              Region
            </div>
            <div className="heroframe-child2-child1-child1-mena">
              <div className="heroframe-child2-child1-child1-menabox">
                <div className="heroframe-child2-child1-child1-menabox-search">
                  <img
                    src={SearchLogo}
                    alt="Your SVG"
                    className="search1-svg"
                  />
                </div>
                <div className="heroframe-child2-child1-child1-menabox-select">
                  <div className="heroframe-child2-child1-child1-menabox-select-child1">
                    <div className="heroframe-child2-child1-child1-menabox-select-hotspot">
                      Hotspot Zones
                    </div>

                    <div className="heroframe-child2-child1-child1-menabox-select-selectoption">
                      <div className="button-row">{buttons}</div>
                    </div>
                    <div></div>
                  </div>
                  <div className="heroframe-child2-child1-child1-menabox-select-child2">
                    Regions
                  </div>
                  <div className="hotspot-region">
                    <div className="hotspot-region-column">
                      <div className="hotspot-region-columntext">
                        Hotspot Region
                      </div>
                      <div className="hotspot-region-column-scroll">
                        {regions}
                      </div>
                    </div>
                    <div className="hotspot-region-row">
                      {regions1.map((regionName, index) => (
                        <div className="hotspot-region-column" key={regionName}>
                          <div className="hotspot-region-columntext">
                            {parents[index]}
                          </div>
                          <div className="hotspot-region-column-scroll">
                            {children[index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="heroframe-child2-child1-child2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
