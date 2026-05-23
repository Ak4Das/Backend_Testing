import OrderModel from "../models/Order.model.js"

export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find()
    res.status(200)
    res.json(allOrders)
  } catch (error) {
    throw error
  }
}

export const getOrderByUserId = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({ userId: req.params.id })
    res.status(200)
    res.json(allOrders)
  } catch (error) {
    throw error
  }
}

export const getOrderByOrderId = async (id) => {
  try {
    const order = await OrderModel.find({ id: req.params.id })
    res.status(200)
    res.json(order)
  } catch (error) {
    throw error
  }
}

export const saveNewOrder = async (req, res) => {
  try {
    const NewOrder = new OrderModel(req.body)
    await NewOrder.save()
    res.status(200)
    res.json(NewOrder)
  } catch (error) {
    throw error
  }
}

export const findOrderByIdAndUpdate = async (req, res) => {
  try {
    const id = req.params.id
    const dataToUpdate = req.body
    const order = await OrderModel.findOneAndUpdate({ id: id }, dataToUpdate, {
      new: true,
    })
    res.status(200)
    res.json(order)
  } catch (error) {
    throw error
  }
}

export const findOrderByIdAndDelete = async (req, res) => {
  try {
    const deletedOrder = await OrderModel.findOneAndDelete({
      id: req.params.id,
    })
    res.status(200)
    res.json(deletedOrder)
  } catch (error) {
    throw error
  }
}
