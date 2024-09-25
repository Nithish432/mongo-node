import { client } from "../index.js";

export async function createUser(data) {
    return await client.db("newdb").collection("users").insertOne(data);
}

export async function getUserByName(username){
    return await client.db("newdb").collection("users").findOne({username: username})
}