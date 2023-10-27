import { Router } from "express";
import { getUser, getUserById, putUser, userDelete } from "../controllers/users.controller.js";

const userRouter = Router()

userRouter.get('/', getUser)

userRouter.get('/:id', getUserById)

userRouter.put('/:id', putUser)

userRouter.delete('/:id',userDelete )

export default userRouter
