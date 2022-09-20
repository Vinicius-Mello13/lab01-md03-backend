import express from "express"
import data from "../data.js";

const foodRouter = express.Router()


//Create

foodRouter.post("/create-food", (req, res) => {
  data.push(req.body);

  return res.json(data);
});

// // Read
foodRouter.get("/", (req, res) => {
 return res.json(data);
})

// // Update
foodRouter.put("/update-food", (req, res) => {
  const { id } =req.params;
  data[id] = req.body
  return res.json(data);
})

// // Delete
foodRouter.delete("/delete-food", (req, res) => {
  const { id } =req.params;
  data.splice(id, 1);


  return res.send();
})

export { foodRouter };