import { randomUUID } from 'crypto';

class Specification {
  uuid?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.uuid) {
      this.uuid = randomUUID();
    }
  }
}

export { Specification };
