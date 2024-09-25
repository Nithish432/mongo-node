// const express = require("express"); // import express
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.routes.js";
import usersRouter from "./routes/users.routes.js";
import cors from 'cors';
import bcrypt from "bcrypt";
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

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


// hashing password,
async function genHashedPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS); //random string
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashedPassword);
}

genHashedPassword("password@123");

export { client };