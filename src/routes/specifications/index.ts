import { Router } from 'express';
import { createSpecificationController } from '../../modules/cars/useCases/createSpecification';

const routes = Router();

routes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { routes as specificationsRoutes };
