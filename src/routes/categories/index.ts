import { Router } from 'express';
import { CreateCategoryService } from '../../modules/cars/services/categories/CreateCategoryService';
import { CategoriesRepository } from '../../modules/cars/repositories/categories';

const routes = Router();
const categoriesRepository = new CategoriesRepository();

routes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).json({ message: 'Category created' });
});

routes.get('/', (_request, response) => {
  return response.json();
});

export { routes as categoriesRoutes };
