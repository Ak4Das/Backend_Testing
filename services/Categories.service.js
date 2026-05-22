import CategoryModel from "../models/Category.model.js"

export const fetchAllCategories = async () => {
  try {
    const allCategories = await CategoryModel.find()
    return allCategories
  } catch (error) {
    throw error
  }
}

export const fetchCategory = async (category) => {
  try {
    const Category = await CategoryModel.find({ for: category })
    return Category
  } catch (error) {
    throw error
  }
}
