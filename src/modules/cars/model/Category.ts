import { randomUUID } from 'crypto';

class Category {
  uuid?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description, created_at }: Omit<Category, 'uuid'>) {
    if (!this.uuid) {
      this.uuid = randomUUID();
    }

    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}

export { Category };
