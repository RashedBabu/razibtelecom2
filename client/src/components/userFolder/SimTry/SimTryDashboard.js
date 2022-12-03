import React from "react";
import AddTouch from "./AddSimTry";
import AllTouch from "./AllSimTry";

const TouchDashboard = () => {
  return (
    <>
      <div className="container add-user">
        <div className="row table_m">
          <div className="col-md-8"> <AllTouch/></div>
          <div className="col-md-4">
            <AddTouch />
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchDashboard;
