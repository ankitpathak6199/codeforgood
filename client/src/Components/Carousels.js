import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousels.css'
export default function Carousels() {
    return (
        <div>
            <Carousel id="lol" >
                <Carousel.Item interval={1000} id="it1">
                    <img
                        className="d-block w-100 "
                        src="devi.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="img.png"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img2.png"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}