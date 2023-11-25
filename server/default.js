import { products } from "./constants/Data.js";
import Product from "./model/product-schema.js";
const DefaultData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Data imported Successfully");
    // validation before inserting
  } catch (err) {
    console.log("Error while inserting default data", err);
  }
};

export default DefaultData;
