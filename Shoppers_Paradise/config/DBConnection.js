const mongoose = require("mongoose");
const DBURL = process.env.DB;

// console.log(DBURL)

mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));
