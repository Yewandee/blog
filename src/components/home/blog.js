import React from 'react'
import { NavLink, } from 'react-router-dom';
import blog2 from "../images/blog2.jpg"


const Blog = () => {
    return (
        <div>
            <div className="container-fluid py-5 my-5">
                
                <div className="row align-">
                    <div className="col-12 col-md-6">
                        <div className="about-img">
                            <img src={blog2} alt="" srcset="" style={{ objectFit: "cover", width: "100%", height: '100vh' }} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 about-text" >
                        <h4 className="section-title">BLOG</h4>
                        <h2>Our Services</h2>
                        <ul>
                            <li><NavLink className="nav-link" to='/contact'>Forex</NavLink></li>
                            <li><NavLink className="nav-link" to='/contact'>Binary Options</NavLink></li>
                            <li><NavLink className="nav-link" to='/contact'>Economics</NavLink></li>
                        </ul>

                        <a className="btn btn-dark py-3 px-5 butn" href="/blog">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog