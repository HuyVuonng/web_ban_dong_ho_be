const mongoose = require('mongoose');
const dotenv= require('dotenv');

dotenv.config()

async function connect(){
   try {
    await mongoose.connect(process.env.DB_local,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
        console.log("connect succesfully");
   } catch (error) {
console.log("connect false", error);
    
   }
}
module.exports= {connect}

