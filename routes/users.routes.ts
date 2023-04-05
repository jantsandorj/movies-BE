import { Router } from "express";
import { getAllUsers, getOneUser } from "../controllers/user.controller";

const route = Router();

route.get("/users", getAllUsers);
route.get("/user/:_id", getOneUser);

export default route;
