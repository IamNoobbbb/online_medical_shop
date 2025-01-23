import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        
        <div className="homeBanner border-t ">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/5b563505137-B2H_24_HP.jpg"
                        alt="Slide 1"
                        className="slider-image"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/0a949f16adb-HOMEPAGE_BANNER2.jpg"
                        alt="Slide 2"
                        className="slider-image"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg"
                        alt="Slide 3"
                        className="slider-image"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/cbe2728ed31-primary_evion.jpg"
                        alt="Slide 4"
                        className="slider-image"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default HomeBanner;
