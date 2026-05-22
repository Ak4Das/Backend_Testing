import {
  fetchAllUsers,
  fetchUserById,
  fetchUserByPassword,
  fetchUserByEmail,
  postNewUser,
  fetchByIdAndUpdate,
  fetchByIdAndUpdateAddress,
  fetchByIdAndUpdateCartItems,
  fetchByIdAndUpdateWishlistItems,
  fetchByIdAndDelete,
} from "../controllers/User.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllUsers)

router.get("/:id", fetchUserById)

router.get("/password/:password", fetchUserByPassword)

router.get("/email/:email", fetchUserByEmail)

router.post("/saveUser", postNewUser)

router.post("/updateUser/:id", fetchByIdAndUpdate)

router.post("/updateUserAddress/:id", fetchByIdAndUpdateAddress)

router.post("/updateCartItems/:id", fetchByIdAndUpdateCartItems)

router.post("/updateWishlistItems/:id", fetchByIdAndUpdateWishlistItems)

router.delete("/deleteUser/:id", fetchByIdAndDelete)

export default router
