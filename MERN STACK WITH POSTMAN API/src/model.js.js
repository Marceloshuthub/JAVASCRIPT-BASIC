let mongoose = require("mongoose")
let book = new mongoose.schema
(
    {
        title = {type:String,required:true},
        author= {type:String,required:true}
        bookid = {type:String,required:true},
        date = {type:String,required:true},
       
    }
)