import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetBasketQuery } from "../../redux/services/basketApi";
import styles from "../../styles/basket.module.css";
import { addBasket, removeBasket } from "../../redux/basket/basketSlice";

const Basket = () => {
  const basketArea = useSelector((state) => state.basket.data);
  console.log("basketArea", basketArea);
  const count = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  function addorRemoveBasket(productId) {
    console.log("productBasket:", productId);
    dispatch(removeBasket(productId));
  }
  return (
    <>
      <div className={styles.basketContainer}>
        <div className={styles.basketList}>
          {basketArea?.length > 0 &&
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
                  <button
                    onClick={() => addorRemoveBasket(x.id)}
                    className={styles.basketBtn}
                  >
                    Sepetten Sil
                  </button>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Basket;
