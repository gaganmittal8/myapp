import React from "react";
import { Helmet } from 'react-helmet';
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "../style/slider.scss";
import { sliderContent } from "../constant";

const Slider = () => {
    
    return (
        <>
            <Helmet>
                <title>React App | Silder</title>
            </Helmet>
            <section className="slider-main">
                <div className="container">
                <div className="row py-5">
                    <div className="col-sm-12">
                    <div className="text-center mb-3">
                        <h1>Slider</h1>
                    </div>
                    </div>
                    <div className="col-sm-12">
                    <div className="slider-Wrapper">
                            <div className="">
                                <div className="slider-Wrapper__inner">
                                    <div className="slider-Wrapper__inner__content">
                                        <div className="swiper-button-prev" id="your-search-swiper-prev">
                                            <a href=""></a>
                                        </div>
                                        <div className="swiper-button-next" id="your-search-swiper-next">
                                            <a href=""></a>
                                        </div>
                                        <Swiper
                                            modules={[Navigation, A11y]}
                                            navigation={{
                                                prevEl: "#your-search-swiper-prev",
                                                nextEl: "#your-search-swiper-next",
                                            }}
                                            spaceBetween={16}
                                            slidesPerView={4}
                                            simulateTouch={true}
                                            onSlideChange={() => {}}
                                            onSwiper={(swiper) => {}}
                                            loop={true}
                                        >

                                            {sliderContent?.map(({ title, list }) => {
                                                return (
                                                    <SwiperSlide>
                                                        <div className="slider-Wrapper__inner__content__card">
                                                            <div className="slider-Wrapper__inner__content__card--title">
                                                                {title}
                                                            </div>
                                                            <ul>
                                                                {list?.map((item) => {
                                                                    return (
                                                                        <li>
                                                                            <a href="">{item}</a>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Slider;