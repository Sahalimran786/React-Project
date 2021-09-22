import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./HomeSlider.css";

export default function HomeSlider() {
    const SliderImages = [
        { key:1, url: "/Img/1.jpg" },
        { key:2, url: "/Img/2.jpg" },
        { key:3, url: "/Img/3.jpg" },
        { key:4, url: "/Img/4.jpg" },
        { key:5, url: "/Img/5.jpg" },
    ];
    return (
        <OwlCarousel autoplay={true} items={1} className='owl-theme' loop margin={10} nav>
            {SliderImages.map(data => <div key={data.key} className='item'>
                <img src={data.url} alt="" />
            </div>
            )}
            </OwlCarousel>


    )
}
