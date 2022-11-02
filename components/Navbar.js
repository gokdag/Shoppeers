import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import cn from "classnames";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  RightOutlined,
} from "@ant-design/icons";

const DATA = {
  view: "space-between",
  allItems: [
    // {
    //   title: "ÇOK SATANLAR",
    //   id:3,
    //   items: [

    //   ],
    // },
    {
      title: "EN YENİLER",
      id: 2,
      items: [],
    },
    {
      title: "GİYİM",
      id: 1,
      topId: 0,
      items: [
        {
          title: "Dış Giyim",
          id: 70,
          topId: 1,
          items: [
            {
              title: "Kaban",
              id: 71,
              topId: 70,
              items: [],
            },
            {
              title: "Mont",
              id: 72,
              topId: 70,
              items: [],
            },
            {
              title: "Trençkot",
              id: 73,
              topId: 70,
              items: [],
            },
            {
              title: "Ceket",
              id: 74,
              topId: 70,
              items: [],
            },
            {
              title: "Yelek",
              id: 75,
              topId: 70,
              items: [],
            },
          ],
        },
        {
          title: "Üst Giyim",
          id: 80,
          topId: 2,
          items: [
            {
              title: "Elbise",
              id: 81,
              topId: 80,
              items: [],
            },
            {
              title: "Abiye",
              id: 82,
              topId: 80,
              items: [],
            },
            {
              title: "Gömlek",
              id: 83,
              topId: 80,
              items: [],
            },
            {
              title: "Sweatshirt",
              id: 84,
              topId: 80,
              items: [],
            },
            {
              title: "T-shirt",
              id: 85,
              topId: 80,
              items: [],
            },
            {
              title: "Bluz & Body",
              id: 86,
              topId: 80,
              items: [],
            },
            {
              title: "Kimono",
              id: 87,
              topId: 80,
              items: [],
            },
            {
              title: "Hırka",
              id: 88,
              topId: 80,
              items: [],
            },
            {
              title: "Triko & Kazak",
              id: 89,
              topId: 80,
              items: [],
            },
            {
              title: "Süveter",
              id: 89,
              topId: 80,
              items: [],
            },
          ],
        },
        {
          title: "Alt Giyim",
          id: 90, // Unique bir id
          topId: 3, // Yukarıda gözükecek olan Title ıd si
          items: [
            {
              title: "Pantolon",
              id: 91,
              topId: 90,
              items: [],
            },
            {
              title: "Suud Jean",
              id: 92,
              topId: 80,
              items: [],
            },
            {
              title: "Etek",
              id: 93,
              topId: 80,
              items: [],
            },
            {
              title: "Eşofman Altı",
              id: 94,
              topId: 80,
              items: [],
            },
            {
              title: "Şort",
              id: 95,
              topId: 80,
              items: [],
            },
          ],
        },
        {
          title: "İç Giyim",
          id: 100, // Unique bir id
          topId: 4, // Yukarıda gözükecek olan Title ıd si
          items: [
            {
              title: "Pantolon",
              id: 101,
              topId: 100,
              items: [],
            },
            {
              title: "Suud Jean",
              id: 102,
              topId: 100,
              items: [],
            },
          ],
        },
        {
          title: "Takım",
          id: 110, // Unique bir id
          topId: 5, // Yukarıda gözükecek olan Title ıd si
          items: [
            {
              title: "Eşofman Takımı",
              id: 111,
              topId: 110,
              items: [],
            },
            {
              title: "Klasik Takım",
              id: 112,
              topId: 110,
              items: [],
            },
          ],
        },
        {
          title: "Koleksiyonlar",
          id: 120, // Unique bir id
          topId: 6, // Yukarıda gözükecek olan Title ıd si
          items: [
            {
              title: "Şimdi Trend",
              id: 121,
              topId: 120,
              items: [],
            },
            {
              title: "Şehre Dönüş",
              id: 122,
              topId: 120,
              items: [],
            },
            {
              title: "New York Koleksiyonu",
              id: 123,
              topId: 120,
              items: [],
            },
            {
              title: "Shine Abiye Koleksiyonu",
              id: 124,
              topId: 120,
              items: [],
            },
            {
              title: "Business Koleksiyonu",
              id: 125,
              topId: 120,
              items: [],
            },
            {
              title: "Basic Koleksiyonu",
              id: 126,
              topId: 120,
              items: [],
            },
          ],
        },
      ],
    },
    {
      title: "AKSESUAR",
      id: 4,
      topId: 3,
      items: [
        {
          title: "Takı",
          id: 130,
          topId: 3, // id ile topId aynı olacak.
          items: [
            {
              title: "Kolye",
              id: 131,
              topId: 130, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Bileklik",
              id: 132,
              topId: 130, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Küpe",
              id: 133,
              topId: 130, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Yüzük",
              id: 134,
              topId: 130, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Halhal",
              id: 135,
              topId: 130, // id ile topId aynı olacak.
              items: [],
            },
          ],
        },
        {
          title: "Şapka",
          id: 140,
          topId: 4, // id ile topId aynı olacak.
          items: [
            {
              title: "Bere",
              id: 141,
              topId: 140, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Bucket Şapka",
              id: 142,
              topId: 140, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Yazlık Şapka",
              id: 143,
              topId: 140, // id ile topId aynı olacak.
              items: [],
            },
            {
              title: "Kep",
              id: 144,
              topId: 140, // id ile topId aynı olacak.
              items: [],
            },
          ],
        },
      ],
    },
    {
      title: "ÇANTA",
      id: 5,
      items: [],
    },
    {
      title: "AYAKKABI",
      id: 6,
      items: [],
    },
    // {
    //   title: "İNDİRİM",
    //   id:7,
    //   items: [

    //   ],
    // },
  ],
};

const Navbar = ({ items }) => {
  const [openModal, setOpenModal] = useState(false);

  const [drawerMenu, setDrawerMenu] = useState(true);

  const [activeNav, setActiveNav] = useState([]);

  const [products, setProducts] = useState({ items: [] });

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/search?keyword=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log({response})
        setProducts(response);
      });
  }, [search]);
  // console.log("products :::",products)

  function onMouseEventHandler(itemId) {
    // console.log("itemId", itemId)
    const items = DATA.allItems.find((x) => x.id == itemId)?.items;
    if (items) {
      setActiveNav(items);
    } else {
      setActiveNav([]);
    }
  }

  return (
    <>
      <div className={styles.generalContainer}>
        {/* <NavbarMobil DATA={DATA.allItems} /> */}
        <Link href="/">
          <div className={styles.navbarLogo}>ShopPeers</div>
        </Link>
        <div className={styles.wrapper}>
          {DATA.allItems.map((x, index) => (
            <NavbarItem
              mouseEvent={onMouseEventHandler}
              key={index}
              id={x.id}
              title={x.title}
              items={x.items}
            />
          ))}
        </div>
        <div className={styles.navbarSocial}>
          <ul className={styles.navbarSocialList}>
            <li
              className={cn({
                [styles.navbarSocialItem]: false,
                [styles.searchIconDesktop]: true,
                [styles.menuIcon]: true,
              })}
            >
              <a className={styles.navbarSocialLink}>
                <MenuOutlined
                  onClick={() => {
                    setDrawerMenu(true);
                  }}
                  style={{ fontSize: "20px" }}
                />
              </a>
            </li>
            <li
              className={cn({
                [styles.navbarSocialItem]: false,
                [styles.searchIcon]: true,
              })}
            >
              <a
                onClick={() => {
                  setOpenModal(true);
                }}
                className={styles.navbarSocialLink}
              >
                <SearchOutlined style={{ fontSize: "20px" }} />
              </a>
            </li>
            {/* MODAL AREA */}
            <div
              className={[
                styles.modal,
                openModal ? styles.activeModal : "",
              ].join(" ")}
            >
              {/* search area */}
              <div className={styles.popup}>
                <div className={styles.popupTitle}>ShopPeers</div>
                <div className={styles.popupSearchArea}>
                  <input
                    onInput={(e) => {
                      setSearch(e.target.value);
                    }}
                    className={styles.popupSearch}
                    type="text"
                    placeholder="Ne aramıştınız?"
                    value={search}
                  />
                </div>
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className={styles.cancel}
                >
                  {" "}
                  X{" "}
                </button>
              </div>
              <div className={styles.generalProduct}>
                {products.items.length > 0 ? (
                  <ul className={styles.listProduct}>
                    {products.items.map((x, index) => {
                      return (
                        <div key={index} className={styles.itemProduct}>
                          <img src={x.url} />
                          <li className={styles.itemText}>{x.text}</li>
                        </div>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* MODAL AREA END */}
            <li
              className={cn({
                [styles.navbarSocialItem]: false,
                [styles.signupIcon]: true,
              })}
            >
              <Link href="/signup">
                <a className={styles.navbarSocialLink}>
                  <UserOutlined style={{ fontSize: "20px" }} />
                </a>
              </Link>
            </li>
            <li
              className={cn({
                [styles.navbarSocialItem]: false,
                [styles.loginIcon]: true,
              })}
            >
              <Link href="/login">
                <a className={styles.navbarSocialLink}>
                  <UserSwitchOutlined style={{ fontSize: "20px" }} />
                </a>
              </Link>
            </li>
            <li
              className={cn({
                [styles.navbarSocialItem]: false,
                [styles.hearthIcon]: true,
              })}
            >
              <Link href="/favorite">
                <a className={styles.navbarSocialLink}>
                  <HeartOutlined style={{ fontSize: "20px" }} />
                </a>
              </Link>
            </li>
            <li
              className={cn({
                [styles.navbarSocialItem]: false,
                [styles.basketIcon]: true,
              })}
            >
              <Link href="/basket">
                <a className={styles.navbarSocialLink}>
                  <ShoppingCartOutlined style={{ fontSize: "22px" }} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          onMouseLeave={() => setActiveNav([])}
          className={cn({
            [styles.navbarSubItems]: true,
            [styles.navbarSubItemsZero]: activeNav.length == 0,
          })}
        >
          {activeNav.map((x, index) => {
            // activeNav olmadığı zaman class ata ve  navbarSubItems => (width padding margin 0 yap.)
            return (
              <div key={index} className={styles.gnDropdown}>
                {/* Ana Başlıkların Yer Aldığı Kısımdır. => Dış Giyim Üst Giyim Alt Giyim İç Giyim */}
                <div className={styles.dropdown}>{x.title}</div>
                <div className={styles.dropdownSubMenu}>
                  {x.items &&
                    x.items.map((y, index) => {
                      return (
                        <>
                          {/* Ana Başlıkların altında çıkan kısımlardır => Kaban, Mont, Trençkot, Ceket */}
                          <div key={index} className={styles.subMenu}>
                            {y.title}
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={cn({[styles.navbarMobilDesktop]: true, [styles.navbarMobil]: true })}>
          <NavbarMobil
            activeState={drawerMenu}
            setActiveState={setDrawerMenu}
            DATA={DATA.allItems}
          />
        </div>
      </div>
    </>
  );
};

const NavbarItem = ({ title, items, mouseEvent, id }) => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem} onMouseEnter={() => mouseEvent(id)}>
          <a className={styles.navbarLink}>{title}</a>
        </li>
      </ul>
    </div>
  );
};

const NavbarMobil = ({ activeState, setActiveState }) => {
  if (!activeState) {
    return null;
  }
  return (
    <div className={styles.navMobilContainer}>
      <div className={styles.navMobilWrapper}>
        <ul className={styles.navMobilList}>
          {DATA.allItems.map((x) => (
            <div className={styles.itemIcons}>
              <li className={styles.navMobilItem}>{x.title}</li>
              <RightOutlined style={{ fontSize: "15px" }} />
            </div>
          ))}
        </ul>
        <div className={styles.close}>
          <CloseOutlined
            onClick={() => {
              setActiveState(false);
            }}
            style={{ fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
