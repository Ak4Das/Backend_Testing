import UserModel from "../models/User.model.js"

export const getAllUsers = async () => {
  try {
    const allUsers = await UserModel.find()
    return allUsers
  } catch (error) {
    throw error
  }
}

export const getUserById = async (id) => {
  try {
    const User = await UserModel.findById(id)
    return User
  } catch (error) {
    throw error
  }
}

export const saveNewUser = async (newUser) => {
  try {
    const NewUser = new UserModel(newUser)
    await NewUser.save()
    return NewUser
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const user = await UserModel.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    })
    return user
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdateAddress = async (id, dataToUpdate) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { address: dataToUpdate },
      {
        new: true,
      },
    )
    return user
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdateCartItems = async (id, dataToUpdate) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { addToCartItems: dataToUpdate },
      {
        new: true,
      },
    )
    return user
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdateWishlistItems = async (id, dataToUpdate) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { addToWishlistItems: dataToUpdate },
      {
        new: true,
      },
    )
    return user
  } catch (error) {
    throw error
  }
}
