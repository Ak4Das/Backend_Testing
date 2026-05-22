import {
  getAllCloths,
  getClothById,
  getClothsByMainCategory,
  findByIdAndUpdate,
  getOfferOnACategory,
  getClothsByCommonCategory,
  getNewArriveCloths,
  getDistinctCommonCategories,
} from "../services/Cloth.service.js"

export const fetchAllCloths = async (req, res) => {
  try {
    const allCloths = await getAllCloths()
    res.status(200)
    res.json(allCloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsById = async (req, res) => {
  try {
    const id = req.params.id
    const cloth = await getClothById(id)
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const fetchNewArriveCloths = async (req, res) => {
  try {
    const cloth = await getNewArriveCloths()
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const fetchDistinctCommonCategories = async (req, res) => {
  try {
    const cloth = await getDistinctCommonCategories()
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const fetchOfferOnACategory = async (req, res) => {
  try {
    const commonCategory = req.params.commonCategory
    const cloth = await getOfferOnACategory(commonCategory)
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByMainCategory = async (req, res) => {
  try {
    const mainCategory = req.params.mainCategory
    const cloths = await getClothsByMainCategory(mainCategory)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByCommonCategory = async (req, res) => {
  try {
    const commonCategory = req.params.commonCategory
    const cloths = await getClothsByCommonCategory(commonCategory)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdate = async (req, res) => {
  try {
    const updatedCloth = await findByIdAndUpdate(req.params.id, req.body)
    res.status(200)
    res.json(updatedCloth)
  } catch (error) {
    throw error
  }
}
