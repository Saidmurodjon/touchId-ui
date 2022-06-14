import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="container">
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
          <i class="bi bi-bell"></i>
          </div>
        </div>
      </div>
    </>
  );
}
