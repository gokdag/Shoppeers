import Link from "next/link";
import React from "react";
import styles from "./module002.module.css";


const DATA = {
  moduleItems: {
    view: "center",
    title: "",
    items: [
      {
        url: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/trenckot.png",
        text: "Trençkot",
        shortText: "Keşfet",
        marketPrice: "",
        price: "",
        categoryId:1,
      },
      {
        url: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/gomlek.png",
        text: "Gömlek",
        shortText: "Keşfet",
        marketPrice: "",
        price: "",
        categoryId:2,
      },
      {
        url: "https://www.suudcollection.com/Uploads/EditorUploads/Banner1/sweatshirt.png",
        text: "Sweatshirt",
        shortText: "Keşfet",
        marketPrice: "",
        price: "",
        categoryId:3,
      },
    ],
  },
};

const Module002 = () => {
 
  return (
    <>
      <div className={styles.module002}>
        <div className={styles.module002List}>
          {DATA.moduleItems.items.map((x, index) => (
            <Link href={x.categoryId.toString()}  key={index}>
              <a className={styles.module002Item}>
                <div className={styles.module002ImageBox}>
                  <img className={styles.module002Image} src={x.url} />
                </div>
                <div className={styles.module002Info}>
                  <span className={styles.module002Text}>{x.text}</span>
                  <span className={styles.module002ShortText}>
                    {x.shortText}
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};



export default Module002;


























//getStaticProps ==> NextJS Page componentlarından export edilebilir.
// //Yani gidip component içerisinde kullanamayız. Export edilemez.
// //Çünkü render edebilmek için bütün verinin yakalanmış olması ve hazır olması gerekmektedir.
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const posts = await res.json();
// return {
//   props: { // will be passed to the page component as props // server side
//     posts,
//   },

// }
// }
