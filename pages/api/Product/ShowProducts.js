import Product from "../../../modal/Product"



export default async function handler(req,res){
    const products = await Product.find({})
    res.status(200).send(products);

}
