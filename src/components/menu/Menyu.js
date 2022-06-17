import React from "react";
import { NavLink } from 'react-router-dom'


export default function Menyu() {
    return (
        <>
            <div className="menu">
                <nav className='asosiyMenyu ps-4'>
                    <ul>
                        <li>
                            <NavLink to='/' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-house-door'></i></span>
                                <span>Бош сахифа</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/bajaruvchi' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-person-fill'></i></span>
                                <span>Бажарувчи</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/buyurtma' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-person-workspace'></i></span>
                                <span>Буюртмачи</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/hisobot' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-card-checklist'></i></span>
                                <span>Хисоботлар</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ishlar' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-list-ul'></i></span>
                                <span>Ишлар рўйхати</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/bolim' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-grid-fill'></i></span>
                                <span>Бўлимлар</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/kabinet' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-terminal-split'></i></span>
                                <span>Хоналар</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/lavozim' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-briefcase'></i></span>
                                <span>Лавозимлар</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/tashkilot' className='bg-light py-1 ps-1 link'>
                                <span><i className='bi bi-building'></i></span>
                                <span>Ташкилотлар</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
