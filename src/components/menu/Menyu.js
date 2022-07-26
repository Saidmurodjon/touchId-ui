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
                <span className="ms-3 linkText">Бош сахифа</span>
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
                <span className="ms-3 linkText">Бажарувчи</span>
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
                <span className="ms-3 linkText">Буюртмачи</span>
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
                <span className="ms-3 linkText">Хисоботлар</span>
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
                <span className="ms-3 linkText">Ишлар рўйхати</span>
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
                <span className="ms-3 linkText">Бўлимлар</span>
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
                <span className="ms-3 linkText">Хоналар</span>
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
                <span className="ms-3 linkText">Лавозимлар</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/qurilmatoifa"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                  <i className="bi bi-cpu"></i>
                </span>
                <span className="ms-3 linkText">Қурилма тоифаси</span>
              </NavLink>
            </li>
            <li className=" py-1 link">
              <NavLink
                to="/statistika"
                className={({ isActive }) => (isActive ? "li" : "")}
              >
                <span>
                <i className="bi bi-clipboard-check"></i>
                </span>
                <span className="ms-3 linkText">Статистика </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
