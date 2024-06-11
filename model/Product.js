const mongoose= require("mongoose")
const schema=mongoose.Schema(
    {
        "id":String,
        "title":String,
        "description":String,
        "price":Number,
        "category":String
    }
)
let productmodel=mongoose.Model("products",schema)
module.exports={productmodel}