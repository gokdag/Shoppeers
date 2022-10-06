import React from "react";
import styles from "./index.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const DATA = {
  moduleItems: {
    view: "center",
    title: "Trend Kombinler",
    items: [
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL084TAS-1.jpg",
        text: "Kısa Kol Midi Boy Elbise",
        marketPrice: "899,00 TL",
        price: "619.00 TL",
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL019KAH-1.jpg",
        text: "Dik Yaka Elbise",
        marketPrice: "769,00 TL",
        price: "599.00 TL",
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL095SYH-4.jpg",
        text: "Desenli Midi Boy Elbise",
        marketPrice: "1199,00 TL",
        price: "749.00 TL",
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL010KAH-1.jpg",
        text: "Biyeli Kolsuz Elbise",
        marketPrice: "799,00 TL",
        price: "599.00 TL",
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL069KAH-1.jpg",
        text: "Beli Lastikli Desenli Elbise",
        marketPrice: "890,00 TL",
        price: "659.00 TL",
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL069KAH-1.jpg",
        text: "Beli Lastikli Desenli Elbise",
        marketPrice: "769,00 TL",
        price: "499.00 TL",
      },
    ],
  },
};

const index = () => {
  return (
    <>
      <div className={styles.modalWrapper}>
        <h3 className={styles.title}>Trend Kombinler</h3>
        <Swiper
          slidesPerView="auto"
          loop={true}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {DATA.moduleItems.items.map((x) => (
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.modalSlider}>
                <img src={x.url} />
                <div className={styles.sliderImgInfo}> {x.text}</div>
                <div className={styles.modalPrices}>
                  <span className={styles.marketPrice}>{x.marketPrice}</span>
                  <span className={styles.price}>{x.price}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default index;