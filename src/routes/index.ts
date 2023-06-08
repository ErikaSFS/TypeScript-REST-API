import express, { Application, Request, Response } from 'express';
import ApiController from '../controllers/apis';

const router = express.Router();

router.get('/api', async(req: Request, res: Response) => {
  const apiController = new ApiController();
  const response = await apiController.getMessage();

  return res.send(response);
});

export default router;