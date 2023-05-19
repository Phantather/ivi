import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";


import { Navigation } from "swiper";
import Card from "../../../components/Card";
const SliderProduct = () => {
    return (
        <section className="sliderproduct">
            <div className="container">
                <h2>
                   Популярные
                </h2>
                    <Swiper
                        navigation={true}
                        spaceBetween={24}


                        slidesPerView={7}
                        modules={[Navigation]}
                        className="mySwiper slidercard"
                        style={{marginTop: "20px"}}>

                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card/>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </section>
    );
};

export default SliderProduct;