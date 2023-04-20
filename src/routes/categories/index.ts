import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../../modules/cars/useCases/listCategories';
import { importCategoryController } from '../../modules/cars/useCases/ importCategory';

const routes = Router();

const upload = multer({
  dest: './tmp',
});

routes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

routes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

routes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { routes as categoriesRoutes };
