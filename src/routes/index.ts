import { Router } from 'express';
import { 
  createUser, 
  createUsers, 
  getAllUsers, 
  updateUser, 
  deleteUser, 
} from '../controllers/user.controller'

import { localStrategyAuth } from '../middlewares/passport.middleware';

export const route = Router();

route.post('/user', createUser);

route.post('/users', createUsers);

route.get('/users', getAllUsers);

route.put('/user/:id', updateUser);

route.delete('/user/:id', deleteUser);

route.post('/login', localStrategyAuth, async (req, res) =>{
    res.json({
      user: req.user,
      auth: req.authInfo
    })
});