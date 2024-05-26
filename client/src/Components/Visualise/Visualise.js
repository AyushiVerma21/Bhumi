import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Visualise = () => {
  return (
    <>
      <h1 className="text-center my-5">Visualising the Data</h1>
      <h6>
        Q1: How would you rate the overall organization and management of the
        event?
      </h6>
      <h6>
        Q2: On a scale of 1 to 5, how satisfied were you with the quality and
        content of the event?
      </h6>
      <h6>
        Q3: Did the event meet your expectations? Please rate your level of
        satisfaction.
      </h6>
      <h6>
        Q4: How likely are you to recommend this event to others in your
        network? Please rate on a scale of 1 to 5.
      </h6>
      <h6>
        Q5: Did the event provide you with valuable knowledge, insights, or
        experiences? Please rate your level of satisfaction.
      </h6>
      <div className="d-flex my-5">
        <div className="mx-5">
          <BarChart />
        </div>
        <LineChart />
      </div>
    </>
  );
};

export default Visualise;
