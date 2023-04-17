import React, { useEffect, useState } from "react";

//css
import "./SideBar.css";

//img
import logo from "../../image/logo.png";

// icons
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";

//components
import { SidebadIconData } from "../../Data/data";

// framer-motion
import { motion } from "framer-motion";







const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);


  const variantsBar = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  }; 


  useEffect(() => {  
    const handel = ()=>{
      setExpanded(window.innerWidth>=768 ?true:false )
    }
    window.addEventListener('resize', handel);
    // return () => window.removeEventListener('resize', handelSize);
  }, []);

  return (
    <>
      <div
        onClick={() => setExpanded(!expanded)}
        className="bars"
        style={expanded ? { left: "28%" } : { left: "5%" }}
      >
        <UilBars />
      </div>
      <motion.div variants={variantsBar} animate={window.innerWidth>=768?expanded:''}>
        <div
          className="SideBar"
          style={expanded ? { left: "0" } : { left: "-45%" }}
        >
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logoshope" />
            <span>
              Sh<span>o</span>pe
            </span>
          </div>
          <div className="menu">
            {SidebadIconData.map((item, index) => (
              <div
                onClick={() => setSelected(index)}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={item.id}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            ))}
            <div className="menuItem signOut">
              <UilSignOutAlt />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
