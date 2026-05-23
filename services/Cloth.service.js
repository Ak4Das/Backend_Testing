import ClothModel from "../models/Cloth.model.js"

export const getAllCloths = async (req, res) => {
  try {
    const allCloths = await ClothModel.find()
    res.status(200)
    res.json(allCloths)
  } catch (error) {
    throw error
  }
}

export const getClothById = async (req, res) => {
  try {
    const id = req.params.id
    const cloth = await ClothModel.findOne({ id: id })
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const getNewArriveCloths = async (req, res) => {
  try {
    const cloth = await ClothModel.find({ newArrival: true })
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const getDistinctCommonCategories = async (req, res) => {
  try {
    const categories = await ClothModel.distinct("commonCategory")
    res.status(200)
    res.json(categories)
  } catch (error) {
    throw error
  }
}

export const getOfferOnACategory = async (req, res) => {
  try {
    const commonCategory = req.params.commonCategory
    const cloth = await ClothModel.find({
      commonCategory,
      $expr: {
        $gt: [
          {
            $toInt: {
              $replaceOne: {
                input: "$offer",
                find: "%",
                replacement: "",
              },
            },
          },
          0,
        ],
      },
    })
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const getClothsByMainCategory = async (req, res) => {
  try {
    const mainCategory = req.params.mainCategory
    const cloths = await ClothModel.find({ mainCategory: mainCategory })
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const getClothsByCommonCategory = async (req, res) => {
  try {
    const commonCategory = req.params.commonCategory
    const cloths = await ClothModel.find({ commonCategory })
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const cloth = await ClothModel.findOneAndUpdate({ id: id }, dataToUpdate, {
      new: true,
    })
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}
