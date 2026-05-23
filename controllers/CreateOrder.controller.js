import {
  getAllItems,
  getItemsByUserId,
  saveNewItem,
  findCreateOrderByUserIdAndUpdate,
  deleteManyItems,
  findByUserIdAndDelete,
} from "../services/CreateOrder.service.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const fetchAllItems = asyncHandler(getAllItems)

export const fetchItemsByUserId = asyncHandler(getItemsByUserId)

export const postNewItem = asyncHandler(saveNewItem)

export const fetchCreateOrderByUserIdAndUpdate = asyncHandler(findCreateOrderByUserIdAndUpdate)

export const deleteMany = asyncHandler(deleteManyItems)

export const fetchByUserIdAndDelete = asyncHandler(findByUserIdAndDelete)
