import { Router } from "express";
import {getAllTheaters, getOneTheater} from "../controllers/theater.controller"

const route = Router();

route.get("/theaters", getAllTheaters);
route.get("/theater/:_id", getOneTheater);

export default route;