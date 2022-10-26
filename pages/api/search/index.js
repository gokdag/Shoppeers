import mockData from "../../../mockData/product.json"


export default function handler(req, res) {
    const keyword = req.query.keyword; 
    if(keyword == "") {
      return res.status(200).json({
        items:[]
      });
    }
    // console.log("keyword", keyword)
    const items = mockData.items.filter((x) => {
      const itemText= x.text.toLowerCase()
      return itemText.includes(keyword.toLowerCase())
    });
    
    return res.status(200).json({
      items,
    });
}