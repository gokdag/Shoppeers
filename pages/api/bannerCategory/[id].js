import mockData from "../../../mockData/product.json"



// Tıkladığımız category kısmına göre filtreleme işlemi yapıyoruz.
export default function handler(req, res) {
  const id = req.query.id;
  const items = mockData.items.filter(
    (x) => x.categoryId == id
  );

  return res.status(200).json({
    items,
  
  });
}

// Burada kategoriye göre filtreleme işlemi yapıyoruz. 