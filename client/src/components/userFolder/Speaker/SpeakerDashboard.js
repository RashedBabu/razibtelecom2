import React from "react";
import AddBattery from "./AddSpeaker";
import AllBattery from "./AllSpeaker";

const BetteryDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8">
            <AllBattery />
          </div>
          <div className="col-md-4">
            <AddBattery />
          </div>
        </div>
      </div>
    </>
  );
};

export default BetteryDashboard;
