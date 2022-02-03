import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./Ad.scss";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-cube";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube,
    Pagination,
    Autoplay,
    Navigation,
} from "swiper";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Autoplay, Navigation]);

const Ad = () => {
    return (
        <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            // pagination={true}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
            </SwiperSlide>
        </Swiper>

    );
};

export default Ad;
