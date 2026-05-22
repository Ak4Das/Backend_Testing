import {
  putAllCloths,
  fetchAllCloths,
  fetchClothsById,
  fetchClothsByCategory,
  fetchClothsByRating,
  fetchClothsByCategoryAndRating,
  fetchClothsByGender,
  fetchClothsByMainCategory,
  fetchClothsByMaterial,
  fetchClothsByFreeDelivery,
  fetchClothsByNewArrival,
  postNewCloth,
  postMultipleCloths,
  fetchByIdAndUpdate,
  fetchByIdAndDelete,
  fetchOfferOnACategory,
  fetchClothsByCommonCategory,
  fetchNewArriveCloths,
  fetchDistinctCommonCategories
} from "../controllers/Cloth.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllCloths)

router.get("/:id", fetchClothsById)

router.get("/newArrive/true", fetchNewArriveCloths)

router.get("/categories/distinct", fetchDistinctCommonCategories)

router.get("/offer/:commonCategory", fetchOfferOnACategory)

router.get("/category/:category", fetchClothsByCategory)

router.get("/rating/:rating", fetchClothsByRating)

router.get("/category&rating/:category/:rating", fetchClothsByCategoryAndRating)

router.get("/gender/:gender", fetchClothsByGender)

router.get("/mainCategory/:mainCategory", fetchClothsByMainCategory)

router.get("/commonCategory/:commonCategory", fetchClothsByCommonCategory)

router.get("/material/:material", fetchClothsByMaterial)

router.get("/freeDelivery/:freeDelivery", fetchClothsByFreeDelivery)

router.get("/newArrival/:newArrival", fetchClothsByNewArrival)

router.put("/seedCloths", putAllCloths)

router.post("/saveCloth", postNewCloth)

router.post("/saveMultipleCloths", postMultipleCloths)

router.patch("/update/:id", fetchByIdAndUpdate)

router.delete("/delete/:id", fetchByIdAndDelete)

export default router
