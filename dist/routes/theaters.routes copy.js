"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const theater_controller_1 = require("../controllers/theater.controller");
const route = (0, express_1.Router)();
route.get("/theaters", theater_controller_1.getAllTheaters);
route.get("/theater/:_id", theater_controller_1.getOneTheater);
exports.default = route;
