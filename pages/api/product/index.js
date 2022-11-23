import mockData from "../../../mockData/product.json"


export default function handler(req, res) {
    const productId = req.body.productId
    // console.log("productId", productId)
    // console.log("req.params ::: ",req.body)
    let productsArray = []
    productId.map((x) => {
        let foundedProduct = mockData.items.find((y) => y.productId==x )
        // console.log("founded::::",foundedProduct)
        if(foundedProduct) productsArray.push(foundedProduct)
    })
   
     res.json({favoriteProducts:productsArray})
}
