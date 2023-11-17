import { products } from "./constatnts/data.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
    try {
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data inserted successfully");
    } 
    catch (error) {
        console.log("Error while inserting data ", error.message);
    }
}

export default DefaultData;