"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const route = (0, express_1.Router)();
route.get("/users", user_controller_1.getAllUsers);
route.get("/user/:_id", user_controller_1.getOneUser);
exports.default = route;
