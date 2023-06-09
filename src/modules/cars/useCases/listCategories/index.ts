// import { CategoriesRepository } from '../../repositories';
// import { CreateCategoryUseCase } from './CreateCategoryUseCase';
// import { CreateCategoryController } from './createCategoryController';

import { CategoriesRepository } from '../../repositories';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
