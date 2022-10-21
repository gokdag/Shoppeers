import styles from "../../styles/details.module.css";
import { useRouter } from "next/router"; // => adres çubuğundan gelen değişkenlere ulaşabileceğiz,

const Details = ({ detailList }) => {
  // console.log("detailList : 55555");
  const router = useRouter();
  const { details } = router.query;
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detail}>
        <div className={styles.detailImage}>
          <img className={styles.image} src={detailList.item.url} />
        </div>
        <div className={styles.detailsWrapper}> 
        <div className={styles.imageInfo}>
          <div className={styles.imageText}>{detailList.item.text}</div>
          <div className={styles.imagePrice}>{detailList.item.price}</div>
        </div>
          <div className={styles.sizes}>Seçiniz (S,M,L,XL)</div>
          <div className={styles.addToBasket}>Sepete Ekle</div>
          <div className={styles.cargoInfo}>Tahmini Kargoya Veriliş Tarihi : 14 Ekim - 19 Ekim </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log("context.query : ", context.query);
  const request = await fetch(
    `http://localhost:3000/api/details/${context.query.details}`
  );
  const detailList = await request.json();
  console.log(detailList)
  return {
    props: {
      detailList,
    },
  };
}

export default Details;
