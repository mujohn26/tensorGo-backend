import express from 'express';
import UserController from "../controller/user.controller"

const userRoute = express.Router();
userRoute.post('/', UserController.saveProduct);
userRoute.get('/', UserController.getProducts);
userRoute.put('/:userId', UserController.updateUser);

export default userRoute;
