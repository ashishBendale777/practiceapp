import React, { useRef } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import "../AllCss/MyCara.css"

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"


const MyCarausel = () => {
    const car = useRef()
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };

    const events = {
        onDragged: function (event) { },
        onChanged: function (event) { }
    };

    return (
        <>
            <OwlCarousel ref={car} options={options} events={events} >
                <div><img className='cara-item' src={img1} alt="The Last of us" /></div>
                <div><img className='cara-item' src={img2} alt="The Last of us" /></div>
                <div><img className='cara-item' src={img3} alt="The Last of us" /></div>
                <div><img className='cara-item' src={img4} alt="The Last of us" /></div>
            </OwlCarousel>
        </>
    )
}

export default MyCarausel