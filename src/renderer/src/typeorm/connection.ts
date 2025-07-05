import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqljs',
  location: ':memory:',
  autoSave: true,
  entities: [__dirname + '/models/*.ts'],
  logging: ['query', 'schema'],
  synchronize: true,
});
