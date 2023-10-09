import React from "react"
import { NavLink, } from 'react-router-dom';
import '../footer/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme()
    console.log(theme)
    return (
        <>
            <footer>
                <div className='container' style={{ backgroundColor: "#1a1a1a", color:theme.palette.secondary.light }}>
                    <div className='row g-5'>
                        <div className='box col-lg-4 col-s-12'>
                            <h1>RAYSTORE</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>

                        </div>

                        <div className='box col-lg-4 col-s-12' style={{textAlign:"center"}}>
                            <h2>Blog Center</h2>
                            <ul>
                                <li><NavLink className="nav-link" to=''>Forex</NavLink></li>
                                <li><NavLink className="nav-link" to=''>Binary Options</NavLink></li>
                                <li><NavLink className="nav-link" to=''>Economics</NavLink></li>
                            </ul>
                        </div>
                    
                        <div className='box col-lg-4 col-s-12'>
                            <h2>Contact Us</h2>
                            <ul style={{textAlign: "center"}}>
                                <li>10 Adeniyi Jones, Victoria Island </li>
                                <li>Email: raystore.help@gmail.com</li>
                                <li>Phone: +234 90 9047 4500</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
