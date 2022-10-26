import mockData from "../../../mockData/product.json"


export default function handler(req, res) {
    const id = req.query.id;
    const items = mockData.items.filter((x) => x.productId == id);
    
    return res.status(200).json({
      items,
    });
  }