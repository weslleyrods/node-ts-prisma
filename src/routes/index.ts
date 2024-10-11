import { Router } from 'express';
import *  as helloWorldController from '../controllers/HelloWorldController';

const route = Router();

route.get('/', helloWorldController.helloWorld);

export default route;