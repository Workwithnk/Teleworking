import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Markup } from "interweave";
import "./CSS/Job.css";

function Job({ companyName, title, date, type, location, dis }) {
  const [openData, setopenData] = useState(false);

  const dataInfo = () => {
    setopenData(!openData);
  };

  return (
    <div className="jobContainer">
      <div className="singleJob">
        <div className="jobHeaderData">
          <div className="jobHeaderFirstData">
            <h2 className="job_title">{title}</h2>
            <span>{companyName}</span>
            <span>{date}</span>
          </div>
          <div className="job">
            <button
              className="jobBtn"
              variant="contained"
              className="jobBtn"
              color="primary"
              onClick={dataInfo}
            >
              {openData ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
        </div>
        {openData && (
          <div className="jobBehindData">
            <h3>Job Type : {type}</h3>
            <h3>candidate_required_location : {location}</h3>
            <Markup content={dis} />
            {/* <div>{dis}</div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Job;
