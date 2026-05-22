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
const router = express.Router()

router.get("/", fetchAllItems)

router.get("/:id", fetchItemsByUserId)

router.post("/saveItem", postNewItem)

router.patch("/update/:id", fetchItemByIdAndUpdate)

router.patch("/updateItems/:id", fetchCreateOrderByUserIdAndUpdate)

router.put("/updateItems", updateItems)

router.delete("/deleteMany", deleteMany)

router.delete("/delete/:id", fetchItemByIdAndDelete)

router.delete("/delete/userId/:id", fetchByUserIdAndDelete)

export default router
