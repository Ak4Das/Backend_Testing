import {
  getAllUsers,
  getUserById,
  saveNewUser,
  findByIdAndUpdate,
  findByIdAndUpdateAddress,
  findByIdAndUpdateCartItems,
  findByIdAndUpdateWishlistItems,
} from "../services/User.service.js"

export const fetchAllUsers = async (req, res) => {
  try {
    const allUsers = await getAllUsers()
    res.status(200)
    res.json(allUsers)
  } catch (error) {
    throw error
  }
}

export const fetchUserById = async (req, res) => {
  try {
    const id = req.params.id
    const user = await getUserById(id)
    res.status(200)
    res.json(user)
  } catch (error) {
    throw error
  }
}

export const postNewUser = async (req, res) => {
  try {
    const savedUser = await saveNewUser(req.body)
    res.status(200)
    res.json(savedUser)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdate = async (req, res) => {
  try {
    const updatedUser = await findByIdAndUpdate(req.params.id, req.body)
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdateAddress = async (req, res) => {
  try {
    const updatedUser = await findByIdAndUpdateAddress(req.params.id, req.body)
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdateCartItems = async (req, res) => {
  try {
    const updatedUser = await findByIdAndUpdateCartItems(
      req.params.id,
      req.body,
    )
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdateWishlistItems = async (req, res) => {
  try {
    const updatedUser = await findByIdAndUpdateWishlistItems(
      req.params.id,
      req.body,
    )
    res.status(200)
    res.json(updatedUser)
  } catch (error) {
    throw error
  }
}
