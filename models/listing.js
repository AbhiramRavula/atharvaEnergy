const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const listingSchema = new Schema({
    title: {
       type: String,
       required: true,
         },
    description: String,
    image: {
       type: String,
       default: "https://images.unsplash.com/photo-1625480860249-be231806e6ed?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       set: (v) => v === "" 
       ? "https://images.unsplash.com/photo-1625480860249-be231806e6ed?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       : v ,
       // required: true,
        },
    price: Number,

})

const Listing = mongoose.model("Listing" , listingSchema)
module.exports = Listing; 






