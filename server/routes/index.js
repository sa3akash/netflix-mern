import express from "express";
import {verifyUser, verifyAdmin} from "../middlewares/verifyToken.js";
import AuthControllers from "../controllers/AuthControllers.js";
import UserControllers from "../controllers/UserControllers.js";
import MovieControllers from "../controllers/MovieControllers.js";
import ListControllers from "../controllers/ListControllers.js";


const router = express.Router();


// user routes
router.post("/auth/register", AuthControllers.register);
router.post("/auth/login", AuthControllers.login);
router.post("/auth/logout", AuthControllers.logout);
router.put("/user/:id", verifyUser, UserControllers.updateUser);
router.delete("/user/:id", verifyUser, UserControllers.deleteUser);
router.get("/user/:id", verifyUser, UserControllers.getOneUser);
router.get("/users",verifyAdmin, UserControllers.getAllUser);
router.get("/users/stats",verifyAdmin, UserControllers.getStats);



// movie routes
router.post("/movie/create", verifyAdmin, MovieControllers.createMovie)
router.put("/movie/:id", verifyAdmin, MovieControllers.updateMovie)
router.delete("/movie/:id", verifyAdmin, MovieControllers.deleteMovie)
router.get("/movie/:id", MovieControllers.getOneMovie)
router.get("/movies", MovieControllers.getAllMovie)
router.get("/random", MovieControllers.getRandom)



// List routes
router.post("/list/create", verifyAdmin, ListControllers.createList)
router.put("/list/:id", verifyAdmin, ListControllers.updateList)
router.delete("/list/:id", verifyAdmin, ListControllers.deleteList)
router.get("/list/:id", ListControllers.getOneList)
router.get("/lists", ListControllers.getAllList)





export default router;