import React from "react";
import AddOca from "./AddOca";
import AllOca from "./AllOca";

const OcaDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8">
            <AllOca />
          </div>
          <div className="col-md-4">
            <AddOca />
          </div>
        </div>
      </div>
    </>
  );
};

export default OcaDashboard;
