import CreateOrderModel from "../models/CreateOrder.model.js"

export const getAllItems = async () => {
  try {
    const allItems = await CreateOrderModel.find()
    return allItems
  } catch (error) {
    throw error
  }
}

export const getItemsByUserId = async (userId) => {
  try {
    const allItems = await CreateOrderModel.find({ userId })
    return allItems
  } catch (error) {
    throw error
  }
}

export const saveNewItem = async (newItem) => {
  try {
    const NewItem = new CreateOrderModel(newItem)
    await NewItem.save()
    return NewItem
  } catch (error) {
    throw error
  }
}
export const findCreateOrderByUserIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const createOrder = await CreateOrderModel.findOneAndUpdate(
      { userId: id },
      dataToUpdate,
      {
        new: true,
      },
    )
    return createOrder
  } catch (error) {
    throw error
  }
}

export const deleteManyItems = async () => {
  try {
    const deleteData = await CreateOrderModel.deleteMany({})
    return deleteData
  } catch (error) {
    throw error
  }
}

export const findByUserIdAndDelete = async (id) => {
  try {
    const item = await CreateOrderModel.findOneAndDelete({ userId: id })
    return item
  } catch (error) {
    throw error
  }
}
