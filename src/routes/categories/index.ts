import { Router } from 'express';
import { CategoriesRepository } from '../../repositories/categories';

const routes = Router();
const categoriesRepository = new CategoriesRepository();

routes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).json({ message: 'Category created' });
});

routes.get('/', (_request, response) => {
  const categories = categoriesRepository.findAll();

  return response.json(categories);
});

export { routes as categoriesRoutes };
