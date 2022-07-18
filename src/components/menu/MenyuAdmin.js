import React from "react";
import { NavLink } from "react-router-dom";

export default function MenyuAdmin() {
  return (
    <>
      <div className="menu">
        <nav className="asosiyMenyu ps-4 py-3">
          <ul className="py-1">
            <li className=" py-1 link">
              <NavLink
                to="/tashkilot"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-building"></i>
                </span>
                <span className="ms-3 linkText">Ташкилотлар</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
