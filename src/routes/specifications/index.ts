import { Router } from 'express';
import { SpecificationsRepository } from '../../modules/cars/repositories/specifications';
import { CreateSpecificationService } from '../../modules/cars/services/specifications/CreateSpecificationService';

const routes = Router();

const specificationsRepository = new SpecificationsRepository();

routes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );

  createSpecificationService.execute({
    name: name,
    description: description,
  });

  return response.status(201).send();
});

export { routes as specificationsRoutes };
