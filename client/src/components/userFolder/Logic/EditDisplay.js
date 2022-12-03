import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
import { showLoading } from "../../../helpers/loding";
import { geteditUser, editUser, deleteLogic } from "../../../api/logic";

const EditDisplay = () => {
  const history = useHistory();
  const [display, setDisplay] = useState({
    boxNumber: "",
    productName: "",
    modelName: "",
    quantity: "",
    allQuantity: "",
    price: "",
    date: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    boxNumber,
    productName,
    modelName,
    quantity,
    allQuantity,
    price,
    date,
    successMsg,
    errorMsg,
    loading,
  } = display;

  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await geteditUser(id);
    setDisplay(response.data);
  };

  const handleChange = (evt) => {
    // console.log(evt)

    setDisplay({
      ...display,
      [evt.target.name]: evt.target.value,

      successMsg: "",
      errorMsg: "",
    });
  };
  const handleinput = (evt) => {
    setDisplay({
      ...display,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
      successMsg: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setDisplay({ loading: true });
    await editUser(id, display)
      .then((response) => {
        setDisplay({
          loading: false,
          successMsg: response.data.successMessage,
        });
      })
      .catch((err) => {
        console.log("Axios creatdisplay error: ", err);
        setDisplay({
          ...display,
          loading: false,
          errorMsg: err.response.data.errorMessage,
        });
      });

    history.push("/user/dashboard/logic");
  };

    const deleteLogicData = async (id) => {
      await deleteLogic(id);

      history.push("/user/dashboard/logic");

      // window.location.reload(false);
    };
  return (
    <>
      <div className="col-md-6 editDisplay">
        <div className="card card_create ">
          <div className="card-body">
            <div className="card-title ">
              <h2 align="center">Edit Logic </h2>
              {successMsg && showSuccessMsg(successMsg)}
              {errorMsg && showErrorMsg(errorMsg)}
              {loading && (
                <div className="text-center pb-4">{showLoading()}</div>
              )}
              <form className="signup-form " onSubmit={handleSubmit}>
                {/* boxNumber */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width">
                    <span className="input-group-text">
                      <level>Box Number</level>
                    </span>
                  </div>
                  <input
                    name="boxNumber"
                    value={boxNumber}
                    className="form-control"
                    placeholder="Box Number"
                    type="text"
                    onClick={handleinput}
                    onChange={handleChange}
                  />
                </div>
                {/* productName */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width ">
                    <span className="input-group-text">
                      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                      <level className="edit-width">Product Name</level>
                    </span>
                  </div>
                  <input
                    name="productName"
                    value={productName}
                    className="form-control"
                    placeholder="Product Name"
                    type="text"
                    onChange={handleChange}
                    onClick={handleinput}
                  />
                </div>
                {/* modelName */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width">
                    <span className="input-group-text">
                      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                      <level>Model </level>
                    </span>
                  </div>
                  <input
                    name="modelName"
                    value={modelName}
                    className="form-control"
                    placeholder="model"
                    type="text"
                    onChange={handleChange}
                    onClick={handleinput}
                  />
                </div>
                {/* quantity */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width">
                    <span className="input-group-text">
                      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                      <level>Quantity</level>
                    </span>
                  </div>
                  <input
                    name="quantity"
                    value={quantity}
                    className="form-control"
                    placeholder="qt--0"
                    type="text"
                    onChange={handleChange}
                    onClick={handleinput}
                  />
                </div>
                {/*all quantity */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width">
                    <span className="input-group-text">
                      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                      <level>All Quantity </level>
                    </span>
                  </div>
                  <input
                    name="allQuantity"
                    lable="allQuantity"
                    value={allQuantity}
                    className="form-control"
                    placeholder="Total-Quantity--0"
                    type="text"
                    onChange={handleChange}
                    onClick={handleinput}
                  />
                </div>
                {/* price */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width ">
                    <span className="input-group-text">
                      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                      <level>Price </level>
                    </span>
                  </div>
                  <input
                    name="price"
                    value={price}
                    className="form-control"
                    placeholder="price $0"
                    type="text"
                    onChange={handleChange}
                    onClick={handleinput}
                  />
                </div>
                {/* date */}
                <div className="form-group input-group">
                  <div className="input-group-prepend edit-width">
                    <span className="input-group-text">
                      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                      <level>Date </level>
                    </span>
                  </div>
                  <input
                    name="date"
                    value={date}
                    className="form-control"
                    placeholder="date "
                    type="text"
                    onChange={handleChange}
                    onClick={handleinput}
                  />
                </div>
                {/* Create button */}
                <div className="form-group">
                  <button
                    type="submit"
                    // onClick={() => editUserDetails()}
                    className="btn btn-primary btn-block"
                  >
                    Edit logic
                  </button>
                </div>
                {/* already have account */}
                {/* <p className="text-center text-white">
                  Have an account? <Link to="/signin">Log In</Link>
                </p> */}
              </form>
              <div className="form-group">
                <button
                  onClick={() => deleteLogicData(id)}
                  className="btn btn-danger "
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDisplay;
