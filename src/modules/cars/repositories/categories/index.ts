import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../../../@types/ICategoriesRepository';
import { Category } from '../../model/Category';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category({
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  findAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  // async getCategories(): Promise<Category[]> {
  //   const categories = await this.db.query('SELECT * FROM categories');
  //   return categories;
  // }
}

export { CategoriesRepository };
