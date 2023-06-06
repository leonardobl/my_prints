import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  const data = {
    name: 'Leonardo',
    lastName: 'Lima',
  };

  return res.send(data);
});

export default routes;
