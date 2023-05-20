
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";


import { Navigation } from "swiper";
const SliderTop = () => {
        return (
            <>
                {/*<div className="conatiner">*/}
                    <Swiper
                        navigation={true}
                        spaceBetween={24}
                        centeredSlides={true}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper slidertop">
                        <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage4/contents/d/f/819faa093a2234b5bfb8c3ccb4c916.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                        <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage9/contents/e/9/6f629926faab0c1f04f87ece89ea9f.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                        <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage4/contents/d/f/819faa093a2234b5bfb8c3ccb4c916.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                        <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage9/contents/e/9/6f629926faab0c1f04f87ece89ea9f.jpg/1216x370/?q=85) center/cover no-repeat`}}></SwiperSlide>
                    </Swiper>
                {/*</div>*/}

            </>
);
};

export default SliderTop;