import React from "react";
import { useSelector } from "react-redux";
import { categoryApi } from "../../redux/services/categoryApi";
import { useGetProductQuery } from "../../redux/services/productApi";
import styles from "../../styles/favorite.module.css";

const Favorite = () => {
  const favoriteArea = useSelector((state) => state.favorite.data);
  // console.log("favoriteArea", favoriteArea)

  const { data, error, isLoading } = useGetProductQuery(favoriteArea);
  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  console.log("data", data);

  return (
    <>
      <div className={styles.favoriteContainer}> 
      <div className={styles.favoriteList}>
        {data?.favoriteProducts.length > 0 &&
          data.favoriteProducts.map((x) => (
            <>
            <a className={styles.favoriteItem}> 
              <div className={styles.favoriteImgItem}>
                <img src={x.url} />
              </div>
              <div className={styles.favoriteInfo}>
                <span className={styles.favoriteText}>{x.text}</span>
              </div>
              <div className={styles.favoritePrices}>
                <span className={styles.favoriteMarketPrice}>
                  {x.marketPrice}
                </span>
                <span className={styles.favoritePrice}>{x.price}</span>
              </div>
              </a>
            </>
          ))}
      </div>
      </div>
    </>
  );
};

export default Favorite;
