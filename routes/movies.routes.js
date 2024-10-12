import express from "express";
import {auth} from "../middleware/auth.js"
import { getAllMovies,getMovieById,createMovies,deleteMovieById,updateMovieById } from "../services/movies.service.js";
const router = express.Router();

// /movies - Display all movie data
// send -> JSON // add "/", auth, async
router.get("/", async function (request, response) {
    // db.movies.find({ language : "tamil", name: "Vikram", rating: 8.4 })
  
    if (request.query.rating) {
      request.query.rating = +request.query.rating;
    }
  
    console.log(request.query);
  
    // Cursor -> Pagination | toArray
    const movies = await getAllMovies(request);
    response.send(movies);
  });
  
  // /movies/:id // add "/:id", auth, async
  router.get("/:id", async function (request, response) {
    const { id } = request.params;
    // db.movies.findOne({id: "101" })
  
    console.log(id);
    // const movie = movies.find((mv) => mv.id == id);
    const movie = await getMovieById(id);
      // .findOne({ name: { $regex: /vikram/i }});
    console.log(movie);
    movie
      ? response.send(movie)
      : response.status(404).send({ msg: "Movie not found" });
  });
  
  router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);
    // db.movies.insertMany(data)
  
    const result = await createMovies(data);
  
    response.send(result);
  });
  
  // /movies/:id  // add "/:id", auth, async
  router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    // db.movies.deleteOne({id: "101" })
  
    console.log(id);
    
    const result = await deleteMovieById(id);
    console.log(result);
    result.deletedCount > 0
      ? response.send({msg: "Movie was deleted successfully"})
      : response.status(404).send({ msg: "Movie not found" });
  });
  
  
  // /movies/:id
  router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    console.log(data);
    // db.movies.updateOne({id: "101" }, { $set: {rating: 9}})
  
    console.log(id);
  
    const movie = await updateMovieById(id, data);
  
    console.log(movie);
  
    movie
      ? response.send(movie)
      : response.status(404).send({ msg: "Movie not found" });
  });

  export default router;
