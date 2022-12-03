import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTouch } from "../../../api/backShell";

const AllTouch = () => {
  const [touchs, setTouchs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    loadDisplay();
  }, []);

  const loadDisplay = async () => {
    const response = await getTouch();
    setTouchs(response.data.reverse());
    console.log("Axios All Display success: ", response);
  };

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...touchs].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setTouchs(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...touchs].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setTouchs(sorted);
      setOrder("ASC");
    }
  };
  return (
    <>
      <div className="card card_table">
        <div className="card-body">
          <div className="card-title">
            <div className="table">
              <h1 className="table_text touch" align="center ">
                BackShell Table List
              </h1>
              <div className="form-group input-group form_margin">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  className="form-control form_input "
                  placeholder="Search ... "
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <table class="table table-hover table-fixed">
                <thead align="center">
                  <tr className="table_header">
                    <th onClick={() => sorting("boxNumber")} scope="col">
                      Box_No
                    </th>
                    <th onClick={() => sorting("productName")} scope="col">
                      P_Name
                    </th>
                    <th onClick={() => sorting("modelName")} scope="col">
                      Model
                    </th>
                    <th onClick={() => sorting("quantity")} scope="col">
                      Quantity
                    </th>
                    <th onClick={() => sorting("allQuantity")} scope="col">
                      T-Quantity
                    </th>
                    <th onClick={() => sorting("price")} scope="col">
                      Price
                    </th>
                    <th onClick={() => sorting("date")} scope="col">
                      Date
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody className="table_body" align="center">
                  {touchs
                    .filter((val) => {
                      if (searchTerm === "") {
                        return val;
                      } else if (
                        val.productName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.boxNumber
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.modelName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((display, key) => (
                      <tr key={key}>
                        <td className="th_color" scope="row">
                          {display.boxNumber}
                        </td>
                        <td className="td_color">{display.productName} </td>
                        <td className="th_color">{display.modelName} </td>
                        <td className="td_color">{display.quantity} </td>
                        <td className="th_color">{display.allQuantity} </td>
                        <td className="td_color">{display.price} Tk </td>
                        <td className="th_body">{display.date} </td>
                        <td>
                          <Link
                            className="btn btn-outline-primary mr-2"
                            to={`/user/dashboard/back-shell/edit/${display._id}`}
                          >
                            <i class="fas fa-pen"></i>
                          </Link>
                          {/* <Link className="btn btn-outline-danger">
                              <i
                                className="far fa-trash-alt"
                                // onClick={() => deleteDisplayData(display._id)}
                              ></i>
                            </Link> */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTouch;
