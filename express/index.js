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



// All Status codes
// 200 OK: The request was successful, and the response contains the requested data.
// 201 Created: The request has been fulfilled, resulting in the creation of a new resource.
// 204 No Content: The request was successful, but there is no response body (typically used for DELETE requests).
// 400 Bad Request: The request is malformed or contains invalid data.
// 401 Unauthorized: Authentication is required, and the provided credentials are not valid.
// 403 Forbidden: The server understood the request but refuses to authorize it.
// 404 Not Found: The requested resource could not be found on the server.
// 500 Internal Server Error: An unexpected server error occurred, and the request could not be completed.