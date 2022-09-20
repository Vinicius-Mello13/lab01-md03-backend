import express from "express"
import { foodRouter } from "./routes/food.routes.js";

const app = express()

// app.get("/", (req, res) => {
//   return res.json("Você deu get em http://localhost:4000/")
// });

app.use(express.json());

app.use("/food", foodRouter);

app.listen(4000, () => {
  console.log("Rodando ok");
})