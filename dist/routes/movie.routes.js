"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controller_1 = require("../controllers/movies.controller");
const route = (0, express_1.Router)();
route.get("/movies", movies_controller_1.getAll);
route.get("/movie/:_id", movies_controller_1.getOne);
exports.default = route;
