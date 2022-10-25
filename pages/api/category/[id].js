import mockData from "../../../mockData/product.json"
// Tıkladığımız category kısmına göre filtreleme işlemi yapıyoruz.

export default function handler(req, res) {
    try {
        const id = req.query.id;
        const items = mockData.items.filter(
            (x) => x.categoryId == id
        );
        const categoryInfo=mockData.categoryInfo.find(categoryItem=>categoryItem.id==id)

        return res.status(200).json({
            status: true,
            items,
            categoryData:categoryInfo
        });
    } catch (e) {
        return res.status(500).send({status: false, errorMessage: "Internal server error"})
    }
}

// Burada kategoriye göre filtreleme işlemi yapıyoruz. 