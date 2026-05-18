import {
  fetchAllItems,
  fetchItemsByUserId,
  fetchCreateOrderByUserIdAndUpdate,
  postNewItem,
  fetchItemByIdAndUpdate,
  updateItems,
  deleteMany,
  fetchItemByIdAndDelete,
  fetchByUserIdAndDelete,
} from "../controllers/CreateOrder.controller.js"

import express from "express"
const app = express()
app.use(express.json())

app.get("/", fetchAllItems)

app.get("/:id", fetchItemsByUserId)

app.post("/saveItem", postNewItem)

app.patch("/update/:id", fetchItemByIdAndUpdate)

app.patch("/updateItems/:id", fetchCreateOrderByUserIdAndUpdate)

app.put("/updateItems", updateItems)

app.delete("/deleteMany", deleteMany)

app.delete("/delete/:id", fetchItemByIdAndDelete)

app.delete("/delete/userId/:id", fetchByUserIdAndDelete)

export default app
