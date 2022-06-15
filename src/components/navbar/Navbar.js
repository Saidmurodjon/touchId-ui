import React from "react";
export default function Navbar() {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-5">
            <form action="">
              <input
                className="form-control"
                type="search"
                placeholder="Қидириш"
              />
            </form>
          </div>
          <div className="col-md-4">
            <i className="bi bi-bell"></i>
          </div>
          <div className="col-md-3">
            <h4>Profil</h4>
          </div>
        </div>
      </div>
    </>
  );
}
