"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TheaterSchema = new mongoose_1.Schema({}, { timestamps: true });
const Theaters = (0, mongoose_1.model)("theaters", TheaterSchema);
exports.default = Theaters;
