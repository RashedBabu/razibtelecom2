import React from "react";
import AddRibon from "./AddRibonSwitch";
import AllRibon from "./AllRibonSwitch";

const RibonDashboard = () => {
  return (
    <>
      <div className="container add-ribon">
        <div className="row table_m">
          <div className="col-md-8">
            <h1></h1>
            <AllRibon />
          </div>
          <div className="col-md-4">
            <AddRibon />
          </div>
        </div>
      </div>
    </>
  );
};

export default RibonDashboard;
