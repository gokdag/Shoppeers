import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/bannerCategoryId.module.css";
import cn from "classnames";

const BannerCategoryId = ({ bannerLists }) => {
  console.log(bannerLists);
  const router = useRouter();
  const { bannerCategoryId } = router.query;
  const [click, setClick] = useState(0);
  return (           
    <>  
      <div className={styles.bannerCategoryContainer}>
        {/* <div className={styles.bannerTopTitle}>
          <div className={styles.bannerTitle}>{bannerLists.bannerCategoryInfo[0].title}</div>
          <div className={styles.bannerTitleText}>
            {bannerLists.bannerCategoryInfo[0].titleText}
          </div>
        </div> */}
        <div className={styles.view}>
          <div onClick={() => setClick(2)} className={styles.double}>2</div>
          <div  onClick={() => setClick(3)} className={styles.triple}>3</div>
        </div>
        <div className={cn({ [styles.bannerCategoryList] : true , [styles.triple]: click == 3 ,[styles.double]: click == 2})}>
          {bannerLists.items.map((x, index) => (
            <Link key={index} href={`/detail/${x.productId}`}>
              <a className={styles.bannerCategoryItem}>
                <div className={styles.categoryImgItem}>
                  <img className={styles.categoryImg} src={x.url} />
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

export default BannerCategoryId;
