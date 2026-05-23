import CreateOrderModel from "../models/CreateOrder.model.js"

export const getAllItems = async (req, res) => {
  try {
    const allItems = await CreateOrderModel.find()
    res.status(200)
    res.json(allItems)
  } catch (error) {
    throw error
  }
}

export const getItemsByUserId = async (req, res) => {
  try {
    const allItems = await CreateOrderModel.find({ userId: req.params.id })
    res.status(200)
    res.json(allItems)
  } catch (error) {
    throw error
  }
}

export const saveNewItem = async (req, res) => {
  try {
    const NewItem = new CreateOrderModel(req.body)
    await NewItem.save()
    res.status(200)
    res.json(NewItem)
  } catch (error) {
    throw error
  }
}

export const findCreateOrderByUserIdAndUpdate = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const createOrder = await CreateOrderModel.findOneAndUpdate(
      { userId: id },
      dataToUpdate,
      {
        new: true,
      },
    )
    res.status(200)
    res.json(createOrder)
  } catch (error) {
    throw error
  }
}

export const findByUserIdAndDelete = async (req, res) => {
  try {
    const item = await CreateOrderModel.findOneAndDelete({
      userId: req.params.id,
    })
    res.status(200)
    res.json(item)
  } catch (error) {
    throw error
  }
}
