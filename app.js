const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectdb = require("./db/connect")
const product_routes =require("./routes/product");
require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("working");
}) 

// middleware to set router
app.use("/api/products", product_routes)

const start = async() => {
    try {
      await connectdb(process.env.MONGODB_URL);
      app.listen(port, () => {
        console.log(`Server running at port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start().catch((error) => {
    console.log(error);
  });
  