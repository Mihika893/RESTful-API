require("dotenv").config();
const connectdb = require("./db/connect");
const product = require("./model/product");
const productjson = require("./products.json");
const start = async () => {
  try {
    console.log("connecting to the database...");
    await connectdb(process.env.MONGODB_URL);
    console.log("successfully connected");
    console.log("inserting values inside database..");

    for (let i = 0; i < productjson.length; i++) {
      const existingProduct = await product.findOne({ name: productjson[i].name });
      if (!existingProduct) {
        await product.create(productjson[i]);
      }
    }
    console.log("Successfully inserted values.");
    

  }
  catch(error){
    console.log(error)
  }

}
start();