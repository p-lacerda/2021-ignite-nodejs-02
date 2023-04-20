import { ICategoriesRepository } from '../../../../@types/ICategoriesRepository';
import { Category } from '../../model/Category';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.findAll();
    return categories;
  }
}

export { ListCategoriesUseCase };
