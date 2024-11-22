import { Router } from 'express';
import { 
  createUser, 
  createUsers, 
  getAllUsers, 
  updateUser, 
  deleteUser, 
} from '../controllers/user.controller'

import { localStrategyAuth, bearerStrategyAuth, jwtStrategyAuth } from '../middlewares/passport.middleware';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

export const route = Router();

route.post('/user', jwtStrategyAuth, upload.single('photo'), createUser);

route.post('/users', createUsers);

route.get('/users', jwtStrategyAuth, getAllUsers);

route.put('/user/:id', updateUser);

route.delete('/user/:id', deleteUser);

route.post('/login', localStrategyAuth, async (req, res) =>{
    res.json({
      user: req.user,
      auth: req.authInfo
    })
});