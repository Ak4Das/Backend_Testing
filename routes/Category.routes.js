import {
  getAllCategories,
  getCategory
//   putAllCategories,
} from "../controllers/Category.controller.js"

import express from "express"
const app = express()
app.use(express.json())

app.get("/", getAllCategories)

app.get("/:category", getCategory)

// app.put("/seedCategories", putAllCategories)

export default app
