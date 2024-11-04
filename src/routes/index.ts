import { Router } from 'express';
import { createUser, createUsers } from '../controllers/userController'

export const route = Router();

route.post('/user', createUser);

route.post('/users', createUsers);
