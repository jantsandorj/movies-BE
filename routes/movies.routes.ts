import { Router } from "express";
import {getAll, getOne, create, searchTextBy} from "../controllers/movies.controller"

const route = Router();

route.post("/searchbytext", searchTextBy);
route.post("/movies", getAll);
route.post("/movies", create);
route.get("/movie/:_id", getOne);

export default route;