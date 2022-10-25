import mockData from "../../../mockData/product.json"


export default function handler(req, res) {
    const productId = req.body.productId
    // console.log("productId", productId)
    // console.log("req.params ::: ",req.body)
    let basket = []
    productId.map((x) => {
        let basketProduct = mockData.items.find((y) => y.productId==x )
        // console.log("founded::::",foundedProduct)
        if(basketProduct) basket.push(basketProduct)
    })
   
     res.json({basketProducts:basket})
}
