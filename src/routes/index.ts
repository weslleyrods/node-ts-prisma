import { Router } from 'express';
import { createUser } from '../controllers/userController'

export const route = Router();

route.post('/user', createUser);