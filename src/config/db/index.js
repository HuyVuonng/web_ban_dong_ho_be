const mongoose = require('mongoose');


async function connect(){
   try {
    await mongoose.connect('mongodb://127.0.0.1/web_ban_dong_ho',
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

