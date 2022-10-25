import React from "react";
import styles from "./index.module.css";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useEffect} from "react";
// import required modules
import {Navigation} from "swiper";
import {useSelector, useDispatch} from "react-redux";
import {addFavorite, removeFavorite} from '../../redux/favorite/favoriteSlice'

const DATA = {
    moduleItems: {
        view: "center",
        title: "Trend Kombinler",
        items: [
            {
                url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL084TAS-1.jpg",
                text: "Kısa Kol Midi Boy Elbise",
                shortText: "",
                marketPrice: "899,00 TL",
                price: "619.00 TL",
                categoryId: "3",
                productId: 1
            },
            {
                url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL019KAH-1.jpg",
                text: "Dik Yaka Elbise",
                shortText: "",
                marketPrice: "769,00 TL",
                price: "599.00 TL",
                categoryId: "3",
                productId: 2
            },
            {
                url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL095SYH-4.jpg",
                text: "Desenli Midi Boy Elbise",
                shortText: "",
                marketPrice: "1199,00 TL",
                price: "749.00 TL",
                categoryId: "3",
                productId: 3
            },
            {
                url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL010KAH-1.jpg",
                text: "Biyeli Kolsuz Elbise",
                shortText: "",
                marketPrice: "799,00 TL",
                price: "599.00 TL",
                categoryId: "3",
                productId: 4
            },
            {
                url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23EL069KAH-1.jpg",
                text: "Beli Lastikli Desenli Elbise",
                shortText: "",
                marketPrice: "890,00 TL",
                price: "659.00 TL",
                categoryId: "3",
                productId: 5
            },
            {
                url: "https://farktorcdn.com/Library/Upl/5500156/Product/Y22EL513SYH-1.jpg",
                text: "Kısa Kol Kuşaklı Elbise",
                shortText: "",
                marketPrice: "769,00 TL",
                price: "499.00 TL",
                categoryId: "3",
                productId: 6
            },
        ],
    },
};

const Module001 = () => {
    const count = useSelector((state) => state.favorite)
    const dispatch = useDispatch()
  
    function addorRemoveFavorite(productId) {
        console.log("productFavorite:",productId)

        const checkProductId = count.data.find(x => x == productId)
       
        if (checkProductId || checkProductId == 0) {
           
            dispatch(removeFavorite(productId))
            return
        }
       
        dispatch(addFavorite(productId))
    }

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
                    {DATA.moduleItems.items.map((x, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.modalSlider}>
                     <button className={styles.favorite} onClick={() => addorRemoveFavorite(x.productId)}>Favori </button>
                                <img src={x.url}/>
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

export default Module001;
