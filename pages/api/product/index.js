import mockData from "../../../mockData/product.json"


export default function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    const productId = req.body.productId
    // console.log("req.params ::: ",req.body)
    const data =  mockData.items.filter((product) => product.productId == productId )
     res.json({data})
}
