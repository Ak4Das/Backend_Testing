// import SeedCategories from "../seeders/Category.seeder.js"
import {
  fetchAllCategories,
  fetchCategory,
} from "../services/Categories.service.js"

export const getAllCategories = async (req, res) => {
  try {
    const result = await fetchAllCategories()
    res.status(200)
    res.json(result)
  } catch (error) {
    throw error
  }
}

export const getCategory = async (req, res) => {
  try {
    const result = await fetchCategory(req.params.category)
    res.status(200)
    res.json(result)
  } catch (error) {
    throw error
  }
}

// export const putAllCategories = async (req, res) => {
//   try {
//     const result = await SeedCategories()
//     res.status(200)
//     res.json(result)
//   } catch (error) {
//     throw error
//   }
// }
