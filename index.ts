import mongoose from "mongoose";
import express, { Express, Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import moviesRoute from "./routes/movies.routes";
import theatersRoute from "./routes/theaters.routes";
import usersRoute from "./routes/users.routes";

dotenv.config();
const app: Express = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());

const URL: string = process.env.MONGO_DB_URL || "";
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.error(err));

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello api");
});
app.use("/api", moviesRoute);
app.use("/api", theatersRoute);
app.use("/api", usersRoute);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
