// Görünüm için JSON oluşturalım.

const DATA = {
  bannerCategoryItems: {
    items: [
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23ET122TRNC-1.jpg?V=1.2",
        text: "Kaz Ayağı Desenli Etek",
        shortText: "",
        marketPrice: "599,90 TL",
        price: "349,90 TL",
        categoryId: 4,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23ET108SYH-8.jpg?V=1.2",
        text: "Kalem Etek",
        shortText: "",
        marketPrice: "629,90 TL",
        price: "319,90 TL",
        categoryId: 4,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23ET119LCV-1.jpg?V=1.2",
        text: "Kaz Ayağı Desenli Etek",
        shortText: "",
        marketPrice: "599,90 TL",
        price: "319,90 TL",
        categoryId: 4,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23ET174V%C4%B0Z-1.jpg?V=1.2",
        text: "Leopar Desenli Etek",
        shortText: "",
        marketPrice: "479,90 TL",
        price: "279,90 TL",
        categoryId: 4,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23ET080KIR-4.jpg?V=1.2",
        text: "Arkası Yırtmaçlı Etek",
        shortText: "",
        marketPrice: "479,90 TL",
        price: "349,90 TL",
        categoryId: 4,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/Y22ET382Y%C5%9EL-1.jpg?V=1.2",
        text: "Fırfırlı Etek",
        shortText: "",
        marketPrice: "379,90 TL",
        price: "279,90 TL",
        categoryId: 4,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23CA061Y%C5%9EL-8.jpg?V=1.2",
        text: "Çapraz Askılı Çanta",
        shortText: "",
        marketPrice: "699,90 TL",
        price: "449,90 TL",
        categoryId: 5,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23CA063SAR-9.jpg?V=1.2",
        text: "Kısa Omuz Çantası",
        shortText: "",
        marketPrice: "519,90 TL",
        price: "369,90 TL",
        categoryId: 5,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23CA063SAR-9.jpg?V=1.2",
        text: "Kısa Omuz Çantası",
        shortText: "",
        marketPrice: "519,90 TL",
        price: "369,90 TL",
        categoryId: 5,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23BI047GLD-1.jpg?V=1.2",
        text: "Çelik Bileklik",
        shortText: "",
        marketPrice: "99,90 TL",
        price: "79,90 TL",
        categoryId: 5,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/780x1170/Y22CA091SYH-1.jpg?V=1.2",
        text: "Omuz Çantası",
        shortText: "",
        marketPrice: "599,90 TL",
        price: "399,90 TL",
        categoryId: 5,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/Y22CA018MAV-1.jpg?V=1.2",
        text: "Çapraz Askılı Çanta",
        shortText: "",
        marketPrice: "599,90 TL",
        price: "399,90 TL",
        categoryId: 5,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23TH013SYH-1.jpg?V=1.2",
        text: "Kruvaze Trençkot",
        shortText: "",
        marketPrice: "1999,90 TL",
        price: "1090,90 TL",
        categoryId: 6,
        productId: 1,
      },
      {
        url: "https://farktorcdn.com/Library/Upl/5500156/Product/K23TH014KAH-8.jpg?V=1.2",
        text: "Mono Trençkot",
        shortText: "",
        marketPrice: "1999,90 TL",
        price: "1090,90 TL",
        categoryId: 6,
        productId: 1,
      },
    ],
    bannerCategoryInfo: [
      {
        id: 4,
        title: "Etek",
        titleText:
          "50’nin üzerinde model ve her modelde birden fazla renk seçenek ile en heyecan verici Trençkot Koleksiyonu ile tanışmaya hazır ol. Mevsim geçişlerinin vazgeçilmez görünümünü oluşturan Suud Trençkot Koleksiyonu ile ister romantik, ister sportif bir stil oluşturmak senin elinde. İstediğin rengi, kumaşı, uzunluğu ve kesimi bulmak için Suud Collection Trençkot Koleksiyonu’nu hemen keşfet!",
      },
      {
        id: 5,
        title: "Aksesuar",
        titleText:
          "Her geçen gün değişen formu ve dokularıyla kendini ofis atmosferinden çıkarıp, sokak stiline dahil eden gömleklerin yolcuğuna hemen sen de katıl. Fit kalıbını oversize duruş ile, düz tonlardaki renklerini ise neonlara taşıyan gömlekler, kesinlikle her dolabın en olmazsa olmaz parçalarından biri haline geldi. Onlarca farklı renk, doku ve kesime sahip Suud Collection Gömlek Koleksiyonu’nu hemen keşfet!",
      },
      {
        id: 6,
        title: "Trençkot",
        titleText:
          "Günlük hayatta sıkça tercih edilen rahat modeller, farklı renk çeşitleri ile seni bekliyor. Dik yakalı, yarasa kollu, cepli, kolej tipi, kapüşonlu gibi birçok farklı kesim ve kumaştaki SuperPeer Sweatshirt Koleksiyonu’nu hemen keşfet!",
      },
    ],
  },
};

// Tıkladığımız category kısmına göre filtreleme işlemi yapıyoruz.
export default function handler(req, res) {
  const id = req.query.id;
  const items = DATA.bannerCategoryItems.items.filter(
    (x) => x.categoryId == id
  );
  const bannerCategoryInfo = DATA.bannerCategoryItems.bannerCategoryInfo.filter(
    (x) => x.id == id
  );
  return res.status(200).json({
    items,
    bannerCategoryInfo,
  });
}
