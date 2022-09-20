import express from "express"
import data from "../data.js";

const foodRouter = express.Router()


//Create

foodRouter.post("/create-food", (req, res) => {
  data.push(req.body);

  return res.json(data);
});

// // Read
foodRouter.get("/read-food", (req, res) => {
 return res.json("read ok");
})

// // Update
foodRouter.put("/update-food", (req, res) => {
  const { _id } = req.params;
  data[_id] = req.body
  return res.json("update ok");
})

// // Delete
foodRouter.delete("/delete-food", (req, res) => {
  const { id } = req.params;
  data.splice(id, 1);


  return res.send("delete ok");
})

export { foodRouter };