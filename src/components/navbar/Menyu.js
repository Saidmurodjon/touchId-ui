import React from "react";
import { Link } from 'react-router-dom'


export default function Menyu() {
    return (
        <>
            <div className="menu">
                <nav className='asosiyMenyu ps-3'>
                    <ul>
                        <li className='my-3'>
                            <Link to='/' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-house-door'></i></span>
                            <span>Бош сахифа</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/bajaruvchi' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-person-fill'></i></span>
                            <span>Бажарувчи</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/buyurtma' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-person-workspace'></i></span>
                            <span>Буюртмачи</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/hisobot' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-card-checklist'></i></span>
                            <span>Хисоботлар</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/ishlar' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-list-ul'></i></span>
                            <span>Ишлар рўйхати</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/bolim' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-grid-fill'></i></span>
                            <span>Бўлимлар</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/kabinet' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-terminal-split'></i></span>
                            <span>Хоналар</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/lavozim' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-briefcase'></i></span>
                            <span>Лавозимлар</span>
                            </Link>
                        </li>
                        <li className='my-3'>
                            <Link to='/tashkilot' className='bg-light py-3 ps-1 link'>
                            <span><i className='bi bi-building'></i></span>
                            <span>Ташкилотлар</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
