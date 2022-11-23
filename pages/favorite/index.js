import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {categoryApi} from "../../redux/services/categoryApi";
import {useGetProductQuery} from "../../redux/services/productApi";
import styles from "../../styles/favorite.module.css";
import {removeFavorite} from '../../redux/favorite/favoriteSlice'

// İmport React Toastify
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Favorite = () => {

    const deleteshowToastMessage = () => {
        toast.error("Ürün favorilerden kaldırıldı!", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 600,
        });
    };

    const favoriteArea = useSelector((state) => state.favorite.data);
    // console.log("favoriteArea", favoriteArea)
    const count = useSelector((state) => state.favorite)
    const dispatch = useDispatch()

    function addorRemoveFavorite(productId) {
        const checkProductId = count.data.find(x => x == productId)
        if (checkProductId || checkProductId == 0) {
            dispatch(removeFavorite(productId))
            return
        }
        dispatch(addFavorite(productId))
    }

    const {data, error, isLoading} = useGetProductQuery(favoriteArea);
    if (error) return <div>Bir hata oluştu</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <div className={styles.favoriteContainer}>
                <div className={styles.favoriteList}>
                    {data.favoriteProducts.length > 0 ?
                        data.favoriteProducts.map((x) => (
                            <>
                                <div className={styles.favoriteItem}>
                                    <Link href={`/detail/${x.productId}`}>
                                        <a className={styles.favoriteImgItem}>
                                            <img src={x.url}/>
                                        </a>
                                    </Link>

                                    <div className={styles.favoriteInfo}>
                                        <span className={styles.favoriteText}>{x.text}</span>
                                    </div>
                                    <div className={styles.favoritePrices}>
                <span className={styles.favoriteMarketPrice}>
                  {x.marketPrice}
                </span>
                                        <span className={styles.favoritePrice}>{x.price}</span>
                                    </div>
                                    <button className={styles.favoriteBtn} onClick={() => {
                                        addorRemoveFavorite(x.productId);
                                        deleteshowToastMessage();
                                    }}>Favorilerden Sil
                                    </button>
                                </div>
                            </>
                        )) : <div className={styles.emptyFavorite}>
                            <div className={styles.emptyFavoriteTitle}>Favoriler</div>
                            <div className={styles.emptyFavoriteInfo}>Ne yazık ki hiç favorilere rastlamadık.</div>
                            <Link href="/">
                                <a className={styles.emptyFavoriteButton}>ALIŞVERİŞE DEVAM ET!</a>
                            </Link>
                        </div>}
                </div>
                <ToastContainer/>
            </div>
        </>
    );
};

export default Favorite;
