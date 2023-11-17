import mongoose from "mongoose";

const Connection = async (username, password) => {
    // const URL = `mongodb+srv://${username}:${password}@ecommerce.uuojmxl.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb://${username}:${password}@ac-8zgqq2w-shard-00-00.rlurklj.mongodb.net:27017,ac-8zgqq2w-shard-00-01.rlurklj.mongodb.net:27017,ac-8zgqq2w-shard-00-02.rlurklj.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-p5kt27-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb://user:flipkart@ac-8zgqq2w-shard-00-00.rlurklj.mongodb.net:27017,ac-8zgqq2w-shard-00-01.rlurklj.mongodb.net:27017,ac-8zgqq2w-shard-00-02.rlurklj.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-p5kt27-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } 
    catch (error) {
        console.log("Error while connections ", error.message);
    }
}

export default Connection;