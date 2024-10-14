// const express = require("express"); // import express
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.routes.js";
import usersRouter from "./routes/users.routes.js";

import cors from 'cors';

import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URL); // env -> environment variables

const app = express();

const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // phone dial
// top-level await
await client.connect(); // call button
console.log("Mongo is connected ✌️😊");

// express.json() - middleware (inbuilt) | Converts data to JSON
app.use(express.json());
app.use(cors()); // 3rd party middleware

app.get("/", function (request, response) {
  response.send("Hello, world yooo");
});

app.use("/movies", moviesRouter)
app.use("/users", usersRouter)

// /mobiles

// const mobile = [
//   {
//     model: "OnePlus 9 5G",
//     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     company: "Oneplus",
//   },
//   {
//     model: "Iphone 13 mini",
//     img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     company: "Apple",
//   },
//   {
//     model: "Samsung s21 ultra",
//     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     company: "Samsung",
//   },
//   {
//     model: "Xiomi mi 11",
//     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     company: "Xiomi",
//   },
// ];

// app.get("/mobiles", async function (request, response) {
//   // db.mobiles.find({})
//   const mobile = await client
//   .db("newdb")
//   .collection("mobiles")
//   .find({})
//   .toArray(); // Cursor -> Pagination | toArray

//   response.send(mobile);
// });

// app.post("/mobiles", async function (request, response) {
//   const data = request.body;
//   console.log(data);
//   // db.mobiles.insertMany(data)

//   const result = await client.db("newdb").collection("mobiles").insertMany(data);

//   response.send(result);
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


// // hashing password,
// async function genHashedPassword(password) {
//   const NO_OF_ROUNDS = 10;
//   const salt = await bcrypt.genSalt(NO_OF_ROUNDS); //random string
//   const hashedPassword = await bcrypt.hash(password, salt);
//   console.log(salt);
//   console.log(hashedPassword);
// }

// genHashedPassword("password@123");

export { client };