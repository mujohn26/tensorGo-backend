import express from 'express';
import userRoute from './user.routes';


const Router = express.Router();
Router.use('/user', userRoute);

export default Router;
