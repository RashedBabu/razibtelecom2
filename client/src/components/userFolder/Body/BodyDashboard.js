import React from "react";
import AddBody from "./AddBody";
import AllBody from "./AllBody"

const LcdDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8">
            <AllBody />
          </div>
          <div className="col-md-4">
            <AddBody />
          </div>
        </div>
      </div>
    </>
  );
};

export default LcdDashboard;
