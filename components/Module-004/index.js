import React, {useEffect, useState} from "react";
import styles from "./module004.module.css";
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
// import Swiper core and required modules
import {Navigation, A11y} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";


const DATA = {
    banner: {
        view: "center",
        title: "",
        items: [
            {
                url: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/desk.jpg",
                mobileUrl: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/mobil.jpg",
                text: "EN YENİLER",
                shortText: "Şimdi Keşfet",
                marketPrice: "",
                price: "",
                categoryId: 4,
                productId: ""
            },
            {
                url: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/desk-kaban-slider.png",
                mobileUrl: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/mobil-kaban-slider.png",
                text: "KABAN",
                shortText: "Şimdi Keşfet",
                marketPrice: "",
                categoryId: 5,
                productId: ""
            },
            {
                url: "https://www.suudcollection.com/Uploads/EditorUploads/Slider/desktop-btc.jpg",
                mobileUrl: "https://www.suudcollection.com/Uploads/EditorUploads/Slider/m-trenckot-slider.png",
                text: "TRENÇKOT",
                shortText: "Şimdi Keşfet",
                marketPrice: "",
                price: "",
                categoryId: 6,
                productId: ""
            },
            {
                url: "https://www.suudcollection.com/Uploads/EditorUploads/Slider/desktop-indirim.png",
                mobileUrl: "https://www.suudcollection.com/Uploads/EditorUploads/Slider/m-indirim-slider.png",
                text: "İNDİRİMLİ FİYATLAR",
                shortText: "Şimdi Keşfet",
                marketPrice: "",
                price: "",
                categoryId: 7,
                productId: ""
            },
        ],
    },
};

const Module004 = ({isMobile}) => {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            slidesPerView="auto"
            loop={true}
            navigation
            pagination={{clickable: true}}
            className="bannerSwiper"
        >
            {DATA.banner.items.map((x, index) => (
                <SwiperSlide key={index} className={styles.bannerSlide}>
                    <div className={styles.module004Banner}>
                        <div className={styles.bannerSliderImg}>
                            <img src={(isMobile) ? x.mobileUrl : x.url} className={styles.bannerImg}/>
                        </div>
                        <div className={styles.bannerInfo}>
                            <div className={styles.bannerText}>{x.text}</div>
                        </div>
                        <Link href={`category/${x.categoryId.toString()}`}>
                            <a className={styles.btnShortText} >{x.shortText}</a>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default Module004;

