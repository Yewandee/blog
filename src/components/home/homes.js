import React from "react"
import Slider from "react-slick"
import Hdata from "./homedata"
import "../home/home.css"
import Footer from "../footer/footer"
import Contact from "./contact"
import Blog from "./blog"



const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (

        <>
        
            <Slider {...settings}>
                {Hdata.map((value) => {
                    console.log("value", value)
                    return (
                        <div className='slider-item' key={Hdata.id}>
                            <div className='img'>

                                <img
                                    src={value.cover}
                                    alt='Image'
                                    style={{ objectFit: "cover", width: "100%", height: '100vh' }} />

                                <div className="slide-content">
                                    <h1>{value.title}</h1>
                                    <h3>{value.desc}</h3>
                                </div>
                            </div>
                        </div>




                    )
                })}
            </Slider>

            <Blog />
            <Contact />
            

        </>
    )
}

export default Home