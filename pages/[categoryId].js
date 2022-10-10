import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/categoryId.module.css";



const categoryId = ({lists}) => {
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <>
      <div className={styles.categoryContainer}>
      <div className={styles.topTitle}>
                  <div className={styles.title}>{lists.categoryInfo[0].title}</div>
                  <div className={styles.titleText}>{lists.categoryInfo[0].titleText}</div>
                </div>
        <div className={styles.categoryList}>
          {lists.items.map((x) => (
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


//

export async function getServerSideProps(context) {
  console.log(context.query)
  const request = await fetch(`http://localhost:3000/api/category/${context.query.categoryId}`);
 
  const lists = await request.json();
  console.log(Object.keys(lists))

  if (!lists?.categoryInfo[0]) {
    return {
        notFound: true
    };
}
  return {
    props: {
      lists, // will be passed to the page component as props
    }, 
  };
}



export default categoryId;


