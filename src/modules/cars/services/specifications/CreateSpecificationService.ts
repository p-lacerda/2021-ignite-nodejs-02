import { ISpecificationRepository } from '../../../../@types/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

/* eslint-disable no-console */
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
