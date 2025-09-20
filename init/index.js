const mongoose = require("mongoose");
const Listing = require("../model/listing.js");
const initData = require("../init/data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => console.log("connection succefull"))
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

async function initDb() {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
}

initDb();
