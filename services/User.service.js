import UserModel from "../models/User.model.js"

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find()
    res.status(200)
    res.json(allUsers)
  } catch (error) {
    throw error
  }
}

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const User = await UserModel.findById(id)
    res.status(200)
    res.json(User)
  } catch (error) {
    throw error
  }
}

export const saveNewUser = async (req, res) => {
  try {
    const NewUser = new UserModel(req.body)
    await NewUser.save()
    res.status(200)
    res.json(NewUser)
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const updatedUser = await UserModel.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    })
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdateAddress = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { address: dataToUpdate },
      {
        new: true,
      },
    )
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdateCartItems = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { addToCartItems: dataToUpdate },
      {
        new: true,
      },
    )
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdateWishlistItems = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { addToWishlistItems: dataToUpdate },
      {
        new: true,
      },
    )
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}
