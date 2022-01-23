import express from "express"

import userController from "../UserController"

export const userRouter = express.Router()

userRouter.get("/", userController.getUserByEmail)