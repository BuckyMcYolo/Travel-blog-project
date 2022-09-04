import React from "react";
import { VscLocation } from "react-icons/vsc";

const Location = (props) => {
  return (
    <div className="container">
      <img src={props.item.imageUrl} className="location-image" />
      <span className="data">
        <div className="location-data">
          <p className="city">
            {" "}
            <VscLocation className="icon" />
            {props.item.location}
          </p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="mainTitle">{props.item.title}</div>
        <data className="dates">
          {props.item.startDate} -{props.item.endDate}
        </data>
        <article className="paragraph"> {props.item.description}</article>
      </span>
    </div>
  );
};

export default Location;
