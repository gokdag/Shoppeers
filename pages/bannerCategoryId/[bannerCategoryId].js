import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/bannerCategoryId.module.css";

const bannerCategoryId = ({ bannerLists }) => {
  console.log(bannerLists)
  const router = useRouter();
  const { bannerCategoryId } = router.query;
  return (
    <>
      <div className={styles.bannerCategoryContainer}>
        <div className={styles.bannerTopTitle}>
          <div className={styles.bannerTitle}>{bannerLists.bannerCategoryInfo[0].title}</div>
          <div className={styles.bannerTitleText}>
            {bannerLists.bannerCategoryInfo[0].titleText}
          </div>
        </div>
        <div className={styles.bannerCategoryList}>
          {bannerLists.items.map((x) => (
            <Link href="/">
              <a className={styles.bannerCategoryItem}>
                <div className={styles.categoryImgItem}>
                  <img src={x.url} />
                </div>
                <div className={styles.bannerCategoryInfo}>
                  <span className={styles.bannerCategoryText}>{x.text}</span>
                </div>
                <div className={styles.bannerCategoryPrices}>
                  <span className={styles.bannerCategoryMarketPrice}>
                    {x.marketPrice}
                  </span>
                  <span className={styles.bannerCategoryPrice}>{x.price}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query);
  const request = await fetch(
    `http://localhost:3000/api/bannerCategory/${context.query.bannerCategoryId}`
  );
  const bannerLists = await request.json();

  return {
    props: {
      bannerLists, // gelen verileri bannerList olarak bir props'a atadık buradan kullanabileceğiz.
    },
  };
}

export default bannerCategoryId;
