import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../../store/authSlice";
function Header() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-space-between">
        <div className="container">
          <div>
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(logInOut())}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
      {error === null
        ? isLoggedIn || (
            <div className="alert alert-primary mb-0 text-center" role="alert">
              <h5>Pleas Login To Can Access on App</h5>
            </div>
          )
        : ""}
    </div>
  );
}

export default Header;
