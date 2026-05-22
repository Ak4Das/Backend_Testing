import {
  getAllCategories,
  getCategory
//   putAllCategories,
} from "../controllers/Category.controller.js"

import express from "express"
const router = express.Router()

router.get("/", getAllCategories)

router.get("/:category", getCategory)

// router.put("/seedCategories", putAllCategories)

export default router
