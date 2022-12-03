import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { geteditOca, editOca, deleteOca } from "../../../api/ocaGlass";

const EditOca = () => {
  const history = useHistory();
  const [touch, setTouch] = useState({
    boxNumber: "",
    productName: "",
    modelName: "",
    quantity: "",
    allQuantity: "",
    price: "",
    date: "",
  });

  const {
    boxNumber,
    productName,
    modelName,
    quantity,
    allQuantity,
    price,
    date,
  } = touch;

  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await geteditOca(id);
    setTouch(response.data);
  };

  const handleChange = (evt) => {
    // console.log(evt)

    setTouch({
      ...touch,
      [evt.target.name]: evt.target.value,

      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setTouch({ loading: true });
    await editOca(id, touch)
      .then((response) => {
        setTouch({
          loading: false,
          successMsg: response.data.successMessage,
        });
      })
      .catch((err) => {
        console.log("Axios creatdisplay error: ", err);
        setTouch({
          ...touch,
          loading: false,
          errorMsg: err.response.data.errorMessage,
        });
      });

    history.push("/user/dashboard/oca");
  };

  const handleinput = (evt) => {
    setTouch({
      ...touch,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
      successMsg: "",
    });
  };

   const deleteOcaData = async (id) => {
     await deleteOca(id);

     history.push("/user/dashboard/oca");

     // window.location.reload(false);
   };
  return (
    <>
      <div className="col-md-6 editDisplay">
        <div className="card card_create ">
          <div className="card-body">
            <div className="card-title ">
              <h2 align="center">Edit Oca Glass </h2>
              {/* {successMsg && showSuccessMsg(successMsg)}
              {errorMsg && showErrorMsg(errorMsg)}
              {loading && (
                <div className="text-center pb-4">{showLoading()}</div>
              )} */}
              <form className="signup-form  " onSubmit={handleSubmit}>
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
                    lable="quantity"
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
                    Edit Oca Glass
                  </button>
                </div>
                {/* already have account */}
                {/* <p className="text-center text-white">
                  Have an account? <Link to="/signin">Log In</Link>
                </p> */}
              </form>
              <div className="form-group">
                <button
                  onClick={() => deleteOcaData(id)}
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

export default EditOca;
