import Link from "next/link";
import React from "react";
import bannerCategoryId from "../../pages/bannerCategoryId/[bannerCategoryId]";
import styles from "./module003.module.css";

const DATA = {
  bannerItems: {
    view: "center",
    title: "",
    items: [
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/All/Fr-55001561392022173722_etek.jpg?V=11102022183944",
        text: "",
        shortText: "",
        marketPrice: "",
        price: "",
        categoryId: 10,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/All/Fr-55001561392022174007_akseusuar.jpg?V=11102022183944",
        text: "",
        shortText: "",
        marketPrice: "",
        price: "",
        categoryId: 11,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/All/Fr-55001561392022180953_trenccc..jpg?V=11102022183944",
        text: "",
        shortText: "",
        marketPrice: "",
        price: "",
        categoryId: 12,
      },
    ],
  },
};
const Module003 = () => {
  return (
    <>
      <div className={styles.module003}>
        <div className={styles.module003List}>
          {DATA.bannerItems.items.map((x, index) => (
            <Link href={`/bannerCategoryId/${x.categoryId}`} key={index}>
              <a className={styles.module003Item}>
                  <img className={styles.module003Image} src={x.url} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Module003;
