import React from 'react'
import './AdLarge.scss'
import { Swiper, SwiperSlide } from "swiper/react";

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

const AdLarge = () => {
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
                <img src="https://res.cloudinary.com/dvinxey2w/image/upload/v1644172612/ABA/ads%20samples/AD4_yx4wwv.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://res.cloudinary.com/dvinxey2w/image/upload/v1644172612/ABA/ads%20samples/AD2_jmxz7s.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://res.cloudinary.com/dvinxey2w/image/upload/v1644172612/ABA/ads%20samples/AD3_vc8eos.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://res.cloudinary.com/dvinxey2w/image/upload/v1644172611/ABA/ads%20samples/AD1_woon1i.png" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default AdLarge