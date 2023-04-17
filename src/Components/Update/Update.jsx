import React from "react";

//data
import { UpdatesData } from "../../Data/data";

// css
import "./Update.css";

//icon
import {UilClock}  from "@iconscout/react-unicons";

const Update = () => {
  return (
    <div className="Updates">
      {UpdatesData?.map((item) => (
        <div className="update">
          <img src={item.img} alt={item.name} />
          <div className="note">
            <div style={{ marginBottom: "0.5rem" }}>
              <span>{item.name} </span>
              <span>{item.note}</span>
            </div>
              <span className="time"><UilClock className='clock' />{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Update;
