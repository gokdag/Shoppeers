import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/bannerCategoryId.module.css";
import cn from "classnames";

const BannerCategoryId = ({ bannerLists }) => {
  console.log(bannerLists);
  const [listView, setListView] = useState(3);
  useEffect(function () {
    setListView(3);
  }, []);
  return (
    <>
      <div className={styles.bannerCategoryContainer}>
        <div className={styles.bannerTopTitle}>
          <div className={styles.bannerTitle}>
            {bannerLists.categoryData.title}
          </div>
          <div className={styles.bannerTitleText}>
            {bannerLists.categoryData.titleText}
          </div>
        </div>
        <div className={styles.view}>
          <div onClick={() => setListView(2)} className={styles.double}>
            2
          </div>
          <div onClick={() => setListView(3)} className={styles.triple}>
            3
          </div>
        </div>
        <div
          className={cn({
            [styles.bannerCategoryList]: true,
            [styles.triple]: listView == 3,
            [styles.double]: listView == 2,
          })}
        >
          {bannerLists.items.map((x, index) => (
            <div key={index} className={styles.bannerCategoryItem}>
              <div className={styles.categoryImgItem}>
                <div>
                 
                  <Link href={`/detail/${x.productId}`}>
                      <a>
                        <img className={styles.categoryImg} src={Array.isArray(x.url)? x.url[0] : x.url} />
                      </a>
                    </Link>
                  
                </div>

                <div className={styles.sizes}>
                  <div className={styles.sizesTitle}>Beden Seç</div>
                  <div className={styles.sizesItems}>
                    <span className={styles.productSize}>36</span>
                    <span className={styles.productSize}>38</span>
                    <span className={styles.productSize}>40</span>
                    <span className={styles.productSize}>42</span>
                  </div>
                </div>
              </div>
              <div className={styles.bannerCategoryInfo}>
                <Link key={index} href={`/detail/${x.productId}`}>
                  <span className={styles.bannerCategoryText}>{x.text}</span>
                </Link>
              </div>
              <div className={styles.bannerCategoryPrices}>
                <span className={styles.bannerCategoryMarketPrice}>
                  {x.marketPrice}
                </span>
                <span className={styles.bannerCategoryPrice}>{x.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const request = await fetch(
    `http://localhost:3000/api/category/${context.query.bannerCategoryId}`
  );
  const bannerLists = await request.json();

  return {
    props: {
      bannerLists, // gelen verileri bannerList olarak bir props'a atadık buradan kullanabileceğiz.
    },
  };
}

export default BannerCategoryId;
