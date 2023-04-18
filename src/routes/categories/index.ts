import { Router } from 'express';
import { createCategoryController } from '../../modules/cars/useCases/createCategory';

const routes = Router();

routes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

routes.get('/', (_request, response) => {
  return response.json();
});

export { routes as categoriesRoutes };
