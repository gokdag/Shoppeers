import mockData from "../../../mockData/product.json"

export default function handler(req, res) {
  const {id, modelCode} = req.query;
  let item
  if(modelCode) {
     item = mockData.items.find((x) => x.modelCode == modelCode );
     item && (item = item.colors.find((x) => x.productId == item.productId))
  }
  else{
     item = mockData.items.find((x) => x.productId == id )}
  

  return res.status(200).json({
    item
  });
}

// req.query içerisinde id ve modelCode yolladık.
// modelCode'a göre işlem yaptık. Eğer modelCode varsa bunu yap yoksa bunu yap.
