import ClothModel from "../models/Cloth.model.js"

export const getAllCloths = async () => {
  try {
    const allCloths = await ClothModel.find()
    return allCloths
  } catch (error) {
    throw error
  }
}

export const getClothById = async (id) => {
  try {
    const cloth = await ClothModel.findOne({ id: id })
    return cloth
  } catch (error) {
    throw error
  }
}

export const getNewArriveCloths = async () => {
  try {
    const cloth = await ClothModel.find({ newArrival: true })
    return cloth
  } catch (error) {
    throw error
  }
}

export const getDistinctCommonCategories = async () => {
  try {
    const categories = await ClothModel.distinct("commonCategory")
    return categories
  } catch (error) {
    throw error
  }
}

export const getOfferOnACategory = async (commonCategory) => {
  try {
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
    return cloth
  } catch (error) {
    throw error
  }
}

export const getClothsByMainCategory = async (mainCategory) => {
  try {
    const cloths = await ClothModel.find({ mainCategory: mainCategory })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByCommonCategory = async (commonCategory) => {
  try {
    const cloths = await ClothModel.find({ commonCategory })
    return cloths
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const cloth = await ClothModel.findOneAndUpdate({ id: id }, dataToUpdate, {
      new: true,
    })
    return cloth
  } catch (error) {
    throw error
  }
}
