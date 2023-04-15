import { Category } from '../../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
