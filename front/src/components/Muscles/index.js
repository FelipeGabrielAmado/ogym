import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import { Image } from "semantic-ui-react";


import './styles.css'
import 'react-multi-carousel/lib/styles.css';

export default class Muscles extends Component {
    render() {

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 10,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 5,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2,
                slidesToSlide: 1 // optional, default to 1.
            }
        };

        return (
            <div className='muscles-header'>
                <div className='sub-header'>
                    <p>Pick a Muscle!</p>
                </div>
                <div className='muscles'>
                    <Carousel
                        ssr
                        partialVisbile
                        itemClass="image-item"
                        responsive={responsive}
                        infinite={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        autoPlay={false}
                        autoPlaySpeed={5000}

                    >
                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "50px" }}
                                src="/images/icons/biceps.png"
                            />
                            <p>Biceps</p>
                        </div>

                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "50px" }}
                                src="/images/icons/triceps.png"
                            />
                            <p>Triceps</p>
                        </div>


                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "50px" }}
                                src="/images/icons/abs.png"
                            />
                            <p>ABS</p>
                        </div>

                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "35px" }}
                                src="/images/icons/calves.png"
                            />
                            <p>Calves</p>
                        </div>

                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "35px" }}
                                src="/images/icons/chest.png"
                            />
                            <p>Chest</p>
                        </div>

                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "35px" }}
                                src="/images/icons/back.png"
                            />
                            <p>Back</p>
                        </div>

                        <div className='carousel-item'>
                            <Image
                                draggable={false}
                                style={{ width: "35px" }}
                                src="/images/icons/quadricep.png"
                            />
                            <p>Quadriceps</p>
                        </div>


                    </Carousel>

                </div>
            </div>
        );
    }
}