import styles from "../../styles/details.module.css";
import { useRouter } from "next/router"; // => adres çubuğundan gelen değişkenlere ulaşabileceğiz,
import { useDispatch, useSelector } from "react-redux";
import { addBasket, removeBasket } from "../../redux/basket/basketSlice";

// İmport React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Details = ({ detailList }) => {
   console.log("detailList:::",detailList)
  
  // Başlangıç Renge göre Filter 
  const [thisProduct, setThisProduct] = useState(detailList) // detailListten gelen tüm verileri artık thisProduct diyerek kullanabiliriz.
  async function  getNewProduct(id) {
    const request = await fetch(
      `http://localhost:3000/api/details/${id}` 
    );
    const detailList = await request.json();
    console.log({detailList}, {request})
    setThisProduct(detailList)
  }
  // Bitiş Renge göre Filter 

  // React Toastify
  const showToastMessage = () => {
    toast.success("Ürün Sepete Eklendi!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 400,
    });
  };

  const count = useSelector((state) => state.basket);
  const dispatch = useDispatch()

  function AddtoBasket(product) {
    dispatch(addBasket(product));
  }

  // console.log("detailList : 55555");
  const router = useRouter();
  const { details } = router.query;
  return (
    <div className={styles.detailContainer}>
        <div className={styles.detailWrapper}>
            <div className={styles.detailImages}>
               {Array.isArray(thisProduct.item.url) ? thisProduct.item.url.map((x) => (<img src={x}/>)): <img src={thisProduct.item.url}/>}
            </div>
        </div>
        <div className={styles.detailInfo}>
          <div className={styles.detailImgText}>{thisProduct.item.text}</div>
            <div className={styles.detailShortInfo}>
                <span className={styles.infoFirst}>ORİJİNAL ÜRÜN</span>
                <span className={styles.infoSecond}>500 TL ÜZERİ ALIŞVERİŞLERDE KARGO ÜCRETSİZ</span>
            </div>
            {
             thisProduct.item.colors && thisProduct.item.colors.map((x) => (
                <button className={styles.changeColor} style={{backgroundColor:x.colorCode}} onClick={() => {getNewProduct(x.productId)}}></button>
              ))
            }
            <div className={styles.detailImgPrice}>{thisProduct.item.price} TL</div>
            <button onClick={() => {showToastMessage(); AddtoBasket({id:thisProduct.item.productId, url: thisProduct.item.url ,name:thisProduct.item.text, price:thisProduct.item.price});}} className={styles.detailBtn}>SEPETE EKLE</button>
            <ToastContainer />
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
  // console.log(detailList)
  return {
    props: {
      detailList,
    },
  };
}

export default Details;
