import React from "react";
import { NavLink } from "react-router-dom";

export default function Menyu() {
  return (
    <>
      <div className="menu">
        <nav className="asosiyMenyu ps-4 py-3">
          <ul className="py-1">
            <li className="py-1 link">
              <NavLink
                className={({ isActive }) => (isActive ? "li" : "")}
                to="/home"
              >
                <span>
                  <i className="bi bi-house-door"></i>
                </span>
                <span className="ms-2">Бош сахифа</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/bajaruvchi"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-person-fill"></i>
                </span>
                <span className="ms-2">Бажарувчи</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/buyrtma"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-person-workspace"></i>
                </span>
                <span className="ms-2">Буюртмачи</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/hisobot"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-card-checklist"></i>
                </span>
                <span className="ms-2">Хисоботлар</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/ishlar"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-list-ul"></i>
                </span>
                <span className="ms-2">Ишлар рўйхати</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/bolim"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-grid-fill"></i>
                </span>
                <span className="ms-2">Бўлимлар</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/kabinet"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-terminal-split"></i>
                </span>
                <span className="ms-2">Хоналар</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/lavozim"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-briefcase"></i>
                </span>
                <span className="ms-2">Лавозимлар</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/tashkilot"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-building"></i>
                </span>
                <span className="ms-2">Ташкилотлар</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
