const express = require("express");
const productRoutes=require("./routes/product.routes");



const app = express();

// app.use((req, res, next) => {
//    console.log("Got query", req.query);
//    next(); // Don't forget to call next() to pass control to the next middleware or route handler.
//  });
// Used query http://localhost:8080/?name=aliyan&age=23
// got output  in form of key value pair {name:"aliyan",age:"23"}


// I can also check if my api key exist or not 

// app.use((req, res, next) => {
//    if(!req.query.apiKey){
//       return res.status(401).send("Please provide API key");
//    }
//    // here if in query param i provide query by name apiKey=anything it will give status 200 else it will return status 400
   
//       next();
      
 
//     // Don't forget to call next() to pass control to the next middleware or route handler.Suppose you have another middleware next will call that middleware else it will call "/" route 
//  });



// Middleware should be always first as it is the entry pass for our server


// app.use("/",(req,res)=>{
// res.send("Welcome")
// })


app.use("/product",productRoutes);
// handling routes of product page /product is route and file is productRoutes



app.listen(8080, ()=>{
    console.log("Server started");
})