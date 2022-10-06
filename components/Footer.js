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
            text: "Ayakkabı",
            url: "/shoes",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Çanta",
            url: "/bag",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Aksesuar",
            url: "/accessory",
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
            url: "/about",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "İletişim",
            url: "/contact",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Müşteri Hizmetleri",
            url: "/customerservice",
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
            url: "/trenckot",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Kaban",
            url: "/kaban",
            data: [
              {
                icon: false,
                value: "",
              },
            ],
          },
          {
            text: "Gömlek",
            url: "/gömlek",
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

const Footer = () => {

  const [height, setHeight] = useState(false)

    useEffect(() => {
        if(window) {
           setHeight(isMobile)
        }
    }, [])
  


  return (
    <>
      <div className={styles.wrapper}>
        {DATA.topArea.allItems.map((x, index) => (
          <FooterItem key={index} title={x.title} items={x.items}  />
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
          {DATA.bottomRight.allItems.map((x, index) => (
            <FooterItem key={index} title={x.title} items={x.items} />
          ))}
        </div>
      </div>
    </>
  );
};

const FooterItem = ({ title, items }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
       {
        title &&  <li className={styles.item}>
        <span className={styles.title}>{title}</span>
      </li>
       }

        {/* Başlık altındaki yazılar için */}
        {items.map((x, index) => (
          <li key={index} className={styles.bottomList}>
            {x.type ? (
              <div className={styles.bottomItems}>
                <Image className="image" src={x.url ? x.url : ""} width={ 80} height={20}></Image>
              </div>
            ) : (
              <a href={x.url ? x.url : "#"} className={styles.link}>
                {x.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
