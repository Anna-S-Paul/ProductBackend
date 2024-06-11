const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "id":String,
        "title":String,
        "description":String,
        "price":Number,
        "category":String
    }
)
let studentmodel=mongoose.Model("products",schema)
module.exports={productmodel}