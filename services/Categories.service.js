import CategoryModel from "../models/Category.model.js"

export const fetchAllCategories = async (req, res) => {
  try {
    const allCategories = await CategoryModel.find()
    res.status(200)
    res.json(allCategories)
  } catch (error) {
    throw error
  }
}

export const fetchCategory = async (req, res) => {
  try {
    const Category = await CategoryModel.find({ for: req.params.category })
    res.status(200)
    res.json(Category)
  } catch (error) {
    throw error
  }
}
