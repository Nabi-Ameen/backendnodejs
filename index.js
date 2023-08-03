import express from "express";
import {
  getAllUsers,
  getSingleUsers,
  postUsers,
} from "./controllers/UserController.js";
const app = express();
const port = 3003;
// by default express doesnot except json data
app.use(express.json());

app.post("/user", postUsers);

app.get("/user/:id", getSingleUsers);

app.get("/user/", getAllUsers);

app.listen(port, console.log(`app runs on port ${port}`));
