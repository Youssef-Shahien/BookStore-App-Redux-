import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const { error } = useSelector((state) => state.books);
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
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
