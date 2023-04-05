"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
const theaters_routes_1 = __importDefault(require("./routes/theaters.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.port;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const URL = process.env.MONGO_DB_URL || "";
mongoose_1.default
    .connect(URL)
    .then(() => {
    console.log("DB connected");
})
    .catch((err) => console.error(err));
app.get("/api", (req, res) => {
    res.send("Hello api");
});
app.use("/api", movies_routes_1.default);
app.use("/api", theaters_routes_1.default);
app.use("/api", users_routes_1.default);
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
