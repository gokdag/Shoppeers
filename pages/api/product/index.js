import mockData from "../../../mockData/product.json"


export default function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    const productId = req.body.productId
    // console.log("productId", productId)
    // console.log("req.params ::: ",req.body)
    let furkan = []
    productId.map((x) => {
        let foundedProduct = mockData.items.find((y) => y.productId==x )
        // console.log("founded::::",foundedProduct)
        if(foundedProduct) furkan.push(foundedProduct)
      
    })
   
     res.json({favoriteProducts:furkan})
}



// [15,545,8877] ==  [{id:12},{id:51}]
// [{id:12},{id:51}]