import express from 'express';
import { categoriesRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333');
});
