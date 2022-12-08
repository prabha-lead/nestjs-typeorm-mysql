const path = require('path');

var dbConfig = {
  synchronize: true,
  migrations: [path.resolve(__dirname,'migrations/*.js')],
  cli: {
    migrationsDir: path.resolve(__dirname,'migrations')
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'optisol',
      database: 'nestjs',
      entities: ['**/*.entity.js'],
      migrationsRun: true,
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'optisol',
      database: 'nestjs',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
