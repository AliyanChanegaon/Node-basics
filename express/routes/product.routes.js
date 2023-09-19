const {Router}= require("express");


const product=Router();

product.get("/get",(req,res)=>{
    res.end("Welcome to get");

});

product.put("/put",(req,res)=>{
   
   res.end("Welcome to put");
   
});
product.delete("/delete",(req,res)=>{
   
   res.end("Welcome to delete");
   
});
product.post("/post",(req,res)=>{
   
   res.end("Welcome to post");
   
});

module.exports=product;