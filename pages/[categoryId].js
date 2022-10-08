import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/categoryId.module.css";

const DATA = {
  categoryItems: {
    view: "center",
    title: "TRENÇKOT", // center
    titleText:
      "50’nin üzerinde model ve her modelde birden fazla renk seçenek ile en heyecan verici Trençkot Koleksiyonu ile tanışmaya hazır ol. Mevsim geçişlerinin vazgeçilmez görünümünü oluşturan Suud Trençkot Koleksiyonu ile ister romantik, ister sportif bir stil oluşturmak senin elinde. İstediğin rengi, kumaşı, uzunluğu ve kesimi bulmak için Suud Collection Trençkot Koleksiyonu’nu hemen keşfet!",
    items: [
      {
        url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/krem-pamuk-karisimli-kemerli-trenckot-331-4b.jpg",
        text: "Krem  Kemerli Trençkot",
        shortText: "",
        marketPrice: "1299,90 TL",
        price: "799,90 TL",
        id: 1,
      },
      {
        url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/camel-pamuk-karisimli-kemerli-trenckot-ff001a.jpg",
        text: "Camel  Kemerli Trençkot",
        shortText: "",
        marketPrice: "1299,90 TL",
        price: "899,90 TL",
      },
      {
        url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/siyah-pamuk-karisimli-kemerli-trenckot--9d3f2.jpg",
        text: "Siyah  Kemerli Trençkot",
        shortText: "",
        marketPrice: "1599,90 TL",
        price: "699,90 TL",
      },
      {
        url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/klasik-uzun-pamuklu-trenckot-06-b2d.jpg",
        text: "Siyah Uzun Pamuklu Trençkot",
        shortText: "",
        marketPrice: "1199,90 TL",
        price: "789,90 TL",
      },
      {
        url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/deri-vintage-trenckot-c-c964.jpg",
        text: "Siyah Deri Vintage Trençkot",
        shortText: "",
        marketPrice: "1199,90 TL",
        price: "999,90 TL",
      },
      {
        url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/oversize-gabardin-trenckot-1c6dd7.jpg",
        text: "Siyah Astarsız Oversize Trençkot",
        shortText: "",
        marketPrice: "549,90 TL",
        price: "399,90 TL",
      },
    ],
  },
};

const categoryId = ({lists}) => {
 
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <>
      <div className={styles.categoryContainer}>
      <div className={styles.topTitle}>
                  <div className={styles.title}>{DATA.categoryItems.title}</div>
                  <div className={styles.titleText}>{DATA.categoryItems.titleText}</div>
                </div>
        <div className={styles.categoryList}>
          {DATA.categoryItems.items.map((x) => (
            <Link href="/">
              <a className={styles.categoryItem}>
                <div className={styles.categoryImgItem}>
                  <img src={x.url} />
                </div>
                <div className={styles.categoryInfo}>
                  <span className={styles.categoryText}>{x.text}</span>
                </div>
                <div className={styles.categoryPrices}>
                  <span className={styles.categoryMarketPrice}>
                    {x.marketPrice}
                  </span>
                  <span className={styles.categoryPrice}>{x.price}</span>
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
  console.log(context.query)
  const request = await fetch(`http://localhost:3000/api/hello${context.query.categoryId}`);
  const lists = await request.json();
  return {
    props: {
      lists, // will be passed to the page component as props
    }, 
  };
}



export default categoryId;
