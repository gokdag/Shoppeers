import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetBasketQuery } from "../../redux/services/basketApi";
import styles from "../../styles/basket.module.css";
import { addBasket, removeBasket } from "../../redux/basket/basketSlice";

// İmport React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Basket = () => {
  const deleteshowToastMessage = () => {
    toast.error("Ürün sepetten kaldırıldı!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 600,
    });
  };
  const basketArea = useSelector((state) => state.basket.data);
  const dispatch = useDispatch();

  function decreaseProduct(productId) {
    dispatch(removeBasket(productId));
  }
  return (
    <>
      <div className={styles.basketContainer}>
        <div className={styles.basketList}>
        
          { basketArea?.length > 0 ?
            basketArea.map((x) => (
              <>
                <div className={styles.basketItem}>
                  <div className={styles.basketImgItem}>
                    <img src={x.img} />
                  </div>
                  <div className={styles.basketInfo}>
                    <span className={styles.basketText}>{x.name}</span>
                  </div>
                  <div className={styles.basketPrices}>
                    <span className={styles.basketMarketPrice}>
                      {x.marketPrice}
                    </span>
                    <span className={styles.basketPrice}>{x.price}</span>
                  </div>

                  <div className={styles.productAmount}>
                    <div className={styles.amount}>Ürün Adedi : {x.count}</div>
                    <div className={styles.totalPrice}>Toplam : {x.totalPrice} TL</div>
                  </div>
                  <button
                    onClick={() => {
                      decreaseProduct(x.id);
                      deleteshowToastMessage();
                    }}
                    className={styles.basketBtn}
                  >
                    Sepetten Sil
                  </button>
                </div>
              </>
            )) : <div className={styles.emptyBasket}>
                  <div className={styles.emptyBasketTitle}>Sepet</div>
                  <div className={styles.emptyBasketInfo}>Sepetin şu anda boş.</div>
                  <Link href="/"> 
                  <a className={styles.emptyBasketButton}>ALIŞVERİŞE DEVAM ET!</a>
                  </Link>
              </div>
            }
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Basket;
