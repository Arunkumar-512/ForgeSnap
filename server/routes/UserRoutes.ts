import express from 'express'
import { getThumbnailById, getUsersThumbnails } from '../controllers/UserController.js';
import User from '../models/User.js';
import protect from '../Middlewares/auth.js';


const UserRouter = express.Router();

UserRouter.get('/thumbnails',protect,getUsersThumbnails)
UserRouter.get('/thumbnail/:id',protect,getThumbnailById)


export default UserRouter;