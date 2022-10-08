const DATA = {
    categoryItems: {
      view: "center",
      title: "TRENÇKOT", // center
      titleText:
        "50’nin üzerinde model ve her modelde birden fazla renk seçenek ile en heyecan verici Trençkot Koleksiyonu ile tanışmaya hazır ol. Mevsim geçişlerinin vazgeçilmez görünümünü oluşturan Suud Trençkot Koleksiyonu ile ister romantik, ister sportif bir stil oluşturmak senin elinde. İstediğin rengi, kumaşı, uzunluğu ve kesimi bulmak için Suud Collection Trençkot Koleksiyonu’nu hemen keşfet!",
      items: [
        {
          url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/krem-pamuk-karisimli-kemerli-trenckot-331-4b.jpg",
          text: "Krem  Kemerli Trençkot",
          shortText: "",
          marketPrice: "1299,90 TL",
          price: "799,90 TL",
          categoryId: 1,
        },
        {
          url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/camel-pamuk-karisimli-kemerli-trenckot-ff001a.jpg",
          text: "Camel  Kemerli Trençkot",
          shortText: "",
          marketPrice: "1299,90 TL",
          price: "899,90 TL",
        },
        {
          url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/siyah-pamuk-karisimli-kemerli-trenckot--9d3f2.jpg",
          text: "Siyah  Kemerli Trençkot",
          shortText: "",
          marketPrice: "1599,90 TL",
          price: "699,90 TL",
        },
        {
          url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/klasik-uzun-pamuklu-trenckot-06-b2d.jpg",
          text: "Siyah Uzun Pamuklu Trençkot",
          shortText: "",
          marketPrice: "1199,90 TL",
          price: "789,90 TL",
        },
        {
          url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/deri-vintage-trenckot-c-c964.jpg",
          text: "Siyah Deri Vintage Trençkot",
          shortText: "",
          marketPrice: "1199,90 TL",
          price: "999,90 TL",
        },
        {
          url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/oversize-gabardin-trenckot-1c6dd7.jpg",
          text: "Siyah Astarsız Oversize Trençkot",
          shortText: "",
          marketPrice: "549,90 TL",
          price: "399,90 TL",
        },
        {
            url: "https://www.suudcollection.com/Uploads/UrunResimleri/thumb/oversize-gabardin-trenckot-1c6dd7.jpg",
            text: "Siyah Astarsız Oversiz",
            shortText: "",
            marketPrice: "549,90 TL",
            price: "399,90 TL",
          },
      ],
      categoryInfo:[
        {
            id:1, title:"Trençkot", titleText:"50’nin üzerinde model ve her modelde birden fazla renk seçenek ile en heyecan verici Trençkot Koleksiyonu ile tanışmaya hazır ol. Mevsim geçişlerinin vazgeçilmez görünümünü oluşturan Suud Trençkot Koleksiyonu ile ister romantik, ister sportif bir stil oluşturmak senin elinde. İstediğin rengi, kumaşı, uzunluğu ve kesimi bulmak için Suud Collection Trençkot Koleksiyonu’nu hemen keşfet!"
    
        },
        // Böyle olması gerekiyor bu bir örnektir.
        {
            id:2, title:"Gömlek", titleText:"50’nin üzerinde model ve her modelde birden fazla renk seçenek ile en heyecan verici Trençkot Koleksiyonu ile tanışmaya hazır ol. Mevsim geçişlerinin vazgeçilmez görünümünü oluşturan Suud Trençkot Koleksiyonu ile ister romantik, ister sportif bir stil oluşturmak senin elinde. İstediğin rengi, kumaşı, uzunluğu ve kesimi bulmak için Suud Collection Trençkot Koleksiyonu’nu hemen keşfet!"
    
        }
      ]
    },
  };


export default function handler(req, res) {
   const id = (req.query.id)
   if(id === 1) {
   return  res.status(200).json(DATA)
   }
   res.status(200).json(DATA)
  }




// categoryId si itemin category id sine eşit olanları dön categoryId ye sahip olan infoları dönmek için objeleri kullan.
