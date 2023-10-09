import React from 'react'
import "../header/header.css"
import { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { createContext } from "react";
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { setMode } from '../../redux/reducer';
import Switch from '@mui/material/Switch';

export const ThemeContext = createContext(null);
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {
    const dispatch = useDispatch()

    const theme = useTheme();


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <div>

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-3 d-flex justify-content-evenly  ">
                <div className="container-fluid  ">
                    <NavLink className="navbar-brand active" aria-current="page" to='/'>BLOG</NavLink>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse  navbar-collapse" id="navbarNav">
                        <Navbar.Collapse className={isMenuOpen ? 'show' : ''}>
                            <ul className="navbar-nav me-auto  d-flex justify-content-md-evenly ">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    
                                        <li><NavLink className="dropdown-item" to='/forex'>Forex</NavLink></li>
                                        <li><NavLink className="dropdown-item" to='/Binary'>Binary Options</NavLink></li>
                                        <li><NavLink className="dropdown-item" to='/Economics'>Economics</NavLink></li>
                                    </ul>

                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/broker'>Brokers</NavLink>
                                </li>
                                <div className="switch">
                                    <Switch onChange={() => dispatch(setMode())} {...label} defaultChecked color="default" />
                                </div>


                            </ul>

                        </Navbar.Collapse>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header