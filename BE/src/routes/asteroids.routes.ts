import { Router } from "express";
import controller from '../controllers/asteroids';

const asteroidsRoutes = Router();

asteroidsRoutes.get('/asteroids/:dates', controller.getAsteroids);

export { asteroidsRoutes };