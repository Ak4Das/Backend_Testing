import {
  fetchAllOrders,
  fetchOrderByUserId,
  fetchOrderByOrderId,
  postNewOrder,
  fetchOrderByIdAndUpdate,
  fetchOrderByIdAndPushProductInItem,
  fetchOrderByIdAndRemoveProductFromItem,
  fetchOrderByIdAndDelete,
} from "../controllers/Order.controller.js"

import express from "express"
const app = express()
app.use(express.json())

app.get("/", fetchAllOrders)

app.get("/user/:id", fetchOrderByUserId)

app.get("/:id", fetchOrderByOrderId)

app.post("/saveOrder", postNewOrder)

app.post("/update/:id", fetchOrderByIdAndUpdate)

app.post("/updateItem/:id", fetchOrderByIdAndPushProductInItem)

app.post("/deleteItem/:id", fetchOrderByIdAndRemoveProductFromItem)

app.delete("/delete/:id", fetchOrderByIdAndDelete)

export default app
