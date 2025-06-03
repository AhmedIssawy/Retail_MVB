import Prdouct from "../models/product"



exports.GetAllProducts  = async (req, res) => {
   try{
       const products = Product.find({})
       res.status(200).json(products)
   }
   catch (err)
   {
        console.error("Error getting products list: ",err)
       res.status(500).json({ error: 'Error fetching orders with products: ' + err.message });

   }

}
exports.AddProduct = async (req, res) => {
    const {name ,description ,price, img} = req.body
    try{
        const product = new Prdouct(data)
        await product.save();
        res.status(200).json(product)
    }
    catch (err)
    {
        console.error("Error adding product: ",err)
        res.status(500).json({ error: 'Error adding product: ' + err.message });
    }
}
exports.EditProduct = async (req, res) => {
    const id = req.params.id;
    const {name, description, price , img} = req.body;
    try{
        const Product = await Product.findById(id);
        if(!Product){
            res.status(404).json({error: 'Product not found'});
        }
    }
    catch (err){
        console.error("Error editing product: ",err)
        res.status(500).json({ error: 'Error editing product: ' + err.message });
    }
}
exports.DeleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const Product = await Product.findById(id);
        if(!Product){
            res.status(404).json({error: 'Product not found'});
        }
        Product.remove();
    }
    catch (err){
        console.error("Error deleting product: ",err)
        res.status(500).json({ error: 'Error deleting product: ' + err.message })
    }
}