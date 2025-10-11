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
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68dbd7baa90c962c6c868b85",
  }));
  await Listing.insertMany(initData.data);
}

initDb();
