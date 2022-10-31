import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import {isMobile} from 'react-device-detect';
import { useEffect, useState } from "react";

// view: Görünüm (top / center vb )
// type : True ise fotoğraf yada icon gelecek.       title, items

const DATA = {
  topArea: {
    view: "center",
    allItems: [
      {
        title: "Yardıma mı ihtiyacın var?",
        items: [
          {
            text: "E-mail ile bize ulaşabilirsin!",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "Kategoriler",
        items: [
          {
            text: "İndirimli Fiyatlar",
            url: "/category/7",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Kaban",
            url: "/category/5",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "En Yeniler",
            url: "/category/4",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
        ],
      },
      {
        title: "Müşteri Hizmetleri",
        items: [
          {
            text: "Hakkımızda",
            url: "/TabsMenu",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "İletişim",
            url: "/TabsMenu",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Müşteri Hizmetleri",
            url: "/TabsMenu",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
        ],
      },
      {
        title: "Favori Kategoriler",
        items: [
          {
            text: "Trençkot",
            url: "/category/12",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Etek",
            url: "/category/10",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Aksesuar",
            url: "/category/11",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
        ],
      },
    ],
  },
  bottomArea: {
    view: "space-between",
    allItems: [
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/masterpass.png",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/maximum.webp",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/bankkart.webp",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/secure.png",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
    ],
  },
  bottomRight: {
    view: "space-between",
    allItems: [
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/masterpass.png",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/maximum.webp",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/bankkart.webp",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "",
            type: true,
            url: "/image/secure.png",
            data: [
              {
                icon: false,
                value: "info@shopPeers.com",
              },
            ],
          },
        ],
      },
    ],
  },
};

const Footer = ({isMobile}) => {

  return (
    <>
      <div className={styles.wrapper}>
        {DATA.topArea.allItems.map((x, index) => (
          <FooterItem key={index} title={x.title} items={x.items} />
        ))}
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.bottomWrapper}>
          {DATA.bottomArea.allItems.map((x, index) => (
            <FooterItem key={index} title={x.title} items={x.items} />
          ))}
        </div>
        <div className={styles.bottomLogo}>ShopPeers</div>
        <div className={styles.bottomRightWrapper}>
          <p>social media</p>
        </div>
      </div>
    </>
  );
};

const FooterItem = ({ title, items }) => {
  return (
    <ul className={styles.container}>
      <div className={styles.list}>
       {
        title &&  <div className={styles.item}>
        <span className={styles.title}>{title}</span>
      </div>
       }

        {/* Başlık altındaki yazılar için */}
        {items.map((x, index) => (
          <li key={index} className={styles.bottomList}>
            {x.type ? (
                <Image className="image" src={x.url ? x.url : ""} width={ isMobile ? 132 : 80} height={isMobile ? 39 :20}></Image>
            ) : (
              <a href={x.url ? x.url : "#"} className={styles.link}>
                {x.text}
              </a>
            )}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Footer;
