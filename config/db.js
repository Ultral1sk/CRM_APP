const mongoose = require('mongoose');

const connectDB = async () => {
      // we want to acces our file where the username and password are stored so we can acces the databaes after
      require('dotenv').config();

      const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@node-reset-shop-hyski.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

      try { 
            await mongoose.connect(db, {
                  useNewUrlParser   : true,
                  useCreatedIndex   : true,
                  useUnifiedTopology: true,
                  useFindAndModify  : false
            });
            console.log(`Mongo Atlas Server is ready`);
            
      } catch (error) {
            console.log(error.message);
            process.exit(1);
            
      }
}

module.exports = connectDB;