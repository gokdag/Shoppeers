import React, {useEffect, useState} from "react";
import styles from "../../styles/TabsMenu.module.css";
import cn from "classnames";
import {useRouter} from "next/router";

const DATA = {
    tabItems: {
        items: [
            {
                title: "Hakkımızda",
                shortTitle: "Hakkımızda",
                text: "ShopPeers Collection olarak 2022 yılında aradığın kaliteyi, modeli, rengi, yada deseni bulamayan kadınlara tüm bu aradıklarını ulaşılabilir fiyatlara sunma isteği ile heyecanlı bir yolculuğa başladık. Her bir koleksiyonda beklenenden çok daha fazlasını yaparak bir moda markasının ötesinde, iyi hisler yaratan bir yaşam ve stil markası olarak kendimizi konumlandırdık.",
                id: 1,
            },
            {
                title: "İletişim",
                shortTitle: "İletişim",
                text: "090 230 1474 numaralı telefon numaramızdan bizleri arayarak 7/24 saat ulaşabilirsiniz. ",
                id: 2,
            },
            {
                title: "Müşteri Hizmetleri",
                shortTitle: "Müşteri Hizmetleri",
                text: "Taleplerinizi, görüşlerinizi önemsiyoruz. shoppeers@shoppeers.com üzerinden bize ulaşabilirsiniz. ",
                id: 3,
            },
        ],
    },
};

const TabsMenu = () => {
    const router = useRouter();
    const [tab, setTab] = useState([]);
    const {q} = router.query
    useEffect(() => {
        // URL değişimi için.
        if (tab?.id) {
            router.push(`${router.pathname}?q=${tab.id}`, undefined, {
                shallow: true,
            });
        }
    }, [tab]);
    useEffect(() => {
        if (q) {
            clickedTab(q);
        }
    }, [q]);

    const clickedTab = (item) => {
        let foundedItem = DATA.tabItems.items.find((x) => x.id == item);
        // console.log("foundedItem::",foundedItem)

        // Click ettiğimiz kısım geliyor.
        if (clickedTab) {
            setTab(foundedItem);
            console.log("setfoundedItem::",foundedItem)
        }
        
    };
    return (
        <div className={styles.TabsMenu}>
            <div className={styles.TabsMenuWrapper}>
                {DATA.tabItems.items.map((x) => (
                    <button
                        onClick={() => {
                            clickedTab(x.id)
                        }}
                        className={cn({
                            [styles.tabsTitle]: true,
                            [styles.tabsTitleClicked]: x.id == tab.id,
                        })}
                    >
                        {x.title}
                    </button>
                ))}
            </div>
            <TabContent data={tab}/>
        </div>
    );
};

const TabContent = ({data}) => {
    // if (!data.length) {
    //     console.log("data::::",data)
    //     return 
    // }
    return (
        <div className={styles.tabContent}>
            <div className={styles.tabContentWrapper}>
                <div className={styles.contentTitle}>{data.shortTitle}</div>
                <div className={styles.contentText}>{data.text}</div>
            </div>
        </div>
    );
};

export default TabsMenu;
