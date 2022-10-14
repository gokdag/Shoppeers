import mockData from "../../../mockData/product.json"

export default function handler(req, res) {
  const id = req.query.id;
  const item = mockData.items.find((x) => x.productId == id);
  return res.status(200).json({
    item
  });
}
