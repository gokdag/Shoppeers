import React from 'react'
import Link from 'next/link'
import styles from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
        <h2 className={styles.notFoundInfo}>Üzgünüz.. Sizi Anlayamadık.. </h2>
        <p className={styles.notFoundText}>Anasayfaya <Link href="/"><a>Geri Dön</a></Link></p>
    </div>
  )
}

export default NotFound