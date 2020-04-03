import React from "react";
import { Link } from "react-router-dom";
import "./stateInformation.css";
import moment from "moment";
const StateInformation = ({ stateName, index }) => {
  return (
      <Link
        to={{ pathname: "/moreinformation", state: { stateName: stateName.state } }}
        style={{ textDecoration: "none" }}
      >
        <div className="card">
          <div className="card-body text-center">
            <div className="card-courses details">
              <p>
                {index === 0 ? (
                  <span>Total in India</span>
                ) : (
                  <span>{stateName.state}</span>
                )}
                : {stateName.confirmed}
              </p>
              <p>Currently Infected : {stateName.active}</p>
              <p>Recoverd : {stateName.recovered}</p>
              <p>Death : {stateName.deaths}</p>
              <p className="lastUpdated">
                Last Updated :{" "}
                {moment(
                  stateName.lastupdatedtime,
                  "DD/MM/YYYY hh:mm:ss"
                ).format("MMMM Do YYYY, h:mm:ss A")}
              </p>
            </div>
            {index === 0 ? null : <button className="button">More details</button>}   
          </div>
 
        </div>
      </Link>
  );
};

export default StateInformation;
