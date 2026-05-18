import CategoryModel from "../models/Category.model.js"

export const fetchAllCategories = async () => {
  try {
    const allCloths = await CategoryModel.find()
    return allCloths
  } catch (error) {
    throw error
  }
}
