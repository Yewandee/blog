import React from 'react'
import { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { createContext } from "react";
import ReactSwitch from "react-switch";
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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand active" aria-current="page" to='./home'>BLOG</NavLink>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Navbar.Collapse className={isMenuOpen ? 'show' : ''}>
                            <ul className="navbar-nav me-auto  d-flex justify-content-md-around ">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Forex</a></li>
                                        <li><a className="dropdown-item" href="#">Binary Options</a></li>
                                        <li><a className="dropdown-item" href="#">Economics</a></li>
                                    </ul>

                                </li>

                                <li classNameName="nav-item">
                                    <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
                                </li>

                                <li classNameName="nav-item">
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