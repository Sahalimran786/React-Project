const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB
//     , 
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   }
  )
  .then(() => {
    console.log("Connected With DataBase Successfully");
  })
  .catch((err) => console.log("Not Connected With DataBase"));