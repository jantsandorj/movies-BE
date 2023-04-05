import { Router } from "express";
import {getAll, getOne} from "../controllers/movies.controller"

const route = Router();

route.get("/movies", getAll);
route.get("/movie/:_id", getOne);

export default route;