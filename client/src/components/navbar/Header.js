import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../../helpers/auth";

const Header = ({ history }) => {
  const handleLogout = (evt) => {
    logout(() => {
      history.push("/");
    });
  };

  // views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
      {!isAuthenticated() && (
        <Fragment>
          <Link to="/" className="navbar-brand">
            Razib Telecom
          </Link>
        </Fragment>
      )}

      {isAuthenticated() && isAuthenticated().role === 0 && (
        <Fragment>
          <Link to="/user/dashboard/logic" className="navbar-brand">
            Razib Telecom-1
          </Link>
        </Fragment>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          {!isAuthenticated() && (
            <Fragment>
              {/* <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <i className="fas fa-edit"></i> Signup
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-sign-in-alt"></i> Signin
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <li className="nav-item active">
                <Link to="/user/dashboard/logic" className="nav-link nav-css">
                  <i className="fas fa-mobile"></i> Logic
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/user/dashboard/ribon" className="nav-link nav-css">
                  <i className="fas fa-mobile"></i> Ribon
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/user/dashboard/speaker-dum"
                  className="nav-link nav-css"
                >
                  <i className="fas fa-mobile"></i> Speaker-Dum
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user/dashboard/ribon-switch"
                  className="nav-link nav-css"
                >
                  <i className="fas fa-mobile"></i> Ribon-Switch
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user/dashboard/back-shell"
                  className="nav-link nav-css"
                >
                  <i className="fas fa-mobile"></i> BackShell
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/dashboard/sim-try" className="nav-link nav-css">
                  <i className="fas fa-mobile"></i> Sim-Try
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/user/dashboard/oca" className="nav-link nav-css">
                  <i className="fas fa-mobile"></i> Oca Glass
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/user/dashboard/glass" className="nav-link nav-css">
                  <i className="fas fa-mobile"></i> Glass
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/user/dashboard/body" className="nav-link nav-css">
                  <i className="fas fa-mobile"></i> Full-Body
                </Link>
              </li>
            </Fragment>
          )}

          {/* //admin  */}

          {/* {isAuthenticated() && isAuthenticated().role === 1 && (
            <Fragment>
              <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">
                  <i className="fas fa-home"></i> Dashboard
                </Link>
              </li>
            </Fragment>
          )} */}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <button
                  className="btn btn-link text-secondary text-decoration-none pl-0 logout"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
