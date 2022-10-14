import Link from "next/link";
import React, {useState } from "react";
import styles from "../styles/Navbar.module.css";


const DATA = {
  NavItems: {
    view: "space-between",
    allItems: [
      {
        title: "ÇOK SATANLAR",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
      {
        title: "EN YENİLER",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
      {
        title: "GİYİM",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
      {
        title: "AKSESUAR",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
      {
        title: "ÇANTA",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
      {
        title: "AYAKKABI",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
      {
        title: "İNDİRİM",
        items: [
          {
            text: "",
            data: [
              {
                icon: false,
              },
            ],
          },
        ],
      },
    ],
  },
};

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.generalContainer}>
      <div className={styles.navbarLogo}>ShopPeers</div>
      <div className={styles.wrapper}>
        {DATA.NavItems.allItems.map((x, index) => (
          <NavbarItem key={index} title={x.title} items={x.items} />
        ))}
      </div>
      <div className={styles.navbarSocial}>
        <ul className={styles.navbarSocialList}>
          <li className={styles.navbarSocialItem}>
            <a
              onClick={() => {
                 setOpenModal(true);
              }}
              className={styles.navbarSocialLink}
            >
              ARA
            </a>
          </li>
          {/* MODAL AREA */}
          <div className={[styles.modal, openModal? styles.activeModal : ""].join(" ")}>
            <div className={styles.popup}>
              <div className={styles.popupTitle}>ShopPeers</div>
              <div className={styles.popupSearchArea}>
                <input
                  className={styles.popupSearch}
                  type="text"
                  placeholder="Ne aramıştınız?"
                />
              </div>
              <div
                onClick={() => {
                 setOpenModal(false);
                }}
                className={styles.cancel}
              >
                X
              </div>
            </div>
          </div>
          {/* MODAL AREA END */}
          <li className={styles.navbarSocialItem}>
            <a className={styles.navbarSocialLink}>ÜYE GİRİŞİ</a>
          </li>
          <li className={styles.navbarSocialItem}>
            <Link href="/favorite">  
            <a className={styles.navbarSocialLink}>FAVORİLERİM</a>
            </Link>
          </li>
          <li className={styles.navbarSocialItem}>
            <a className={styles.navbarSocialLink}>SEPETİM</a>
          </li>
       
        </ul>
      </div>
    </div>
  );
};

const NavbarItem = ({ title, items }) => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink}>{title}</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
