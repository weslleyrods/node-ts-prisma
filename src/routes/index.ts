import { Router } from 'express';
import { createUser, createUsers, getAllUsers, updateUser, deleteUser } from '../controllers/userController'

export const route = Router();

route.post('/user', createUser);

route.post('/users', createUsers);

route.get('/users', getAllUsers);

route.put('/user/:id', updateUser);

route.delete('/user/:id', deleteUser);