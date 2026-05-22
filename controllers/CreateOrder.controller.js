import {
  getAllItems,
  getItemsByUserId,
  saveNewItem,
  findCreateOrderByUserIdAndUpdate,
  deleteManyItems,
  findByUserIdAndDelete,
} from "../services/CreateOrder.service.js"

export const fetchAllItems = async (req, res) => {
  try {
    const allItems = await getAllItems()
    res.status(200)
    res.json(allItems)
  } catch (error) {
    throw error
  }
}

export const fetchItemsByUserId = async (req, res) => {
  try {
    const allItems = await getItemsByUserId(req.params.id)
    res.status(200)
    res.json(allItems)
  } catch (error) {
    throw error
  }
}

export const postNewItem = async (req, res) => {
  try {
    const savedItem = await saveNewItem(req.body)
    res.status(200)
    res.json(savedItem)
  } catch (error) {
    throw error
  }
}

export const fetchCreateOrderByUserIdAndUpdate = async (req, res) => {
  try {
    const updatedItem = await findCreateOrderByUserIdAndUpdate(
      req.params.id,
      req.body,
    )
    res.status(200)
    res.json(updatedItem)
  } catch (error) {
    throw error
  }
}

export const deleteMany = async (req, res) => {
  try {
    const data = await deleteManyItems()
    res.status(200)
    res.json(data)
  } catch (error) {
    throw error
  }
}

export const fetchByUserIdAndDelete = async (req, res) => {
  try {
    const deletedItem = await findByUserIdAndDelete(req.params.id)
    res.status(200)
    res.json(deletedItem)
  } catch (error) {
    throw error
  }
}
