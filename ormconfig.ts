import path from 'path'

const entityPath = path.join(__dirname, "./app/entities/*.{ts,js}")
const ormconfig = {
  "name": "default",
  "type": "mysql",
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "port": 3306,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWD,
  "synchronize": false,
  "logging": true,
  "migrationsTableName": "migrations",
  "keepConnectionAlive": true,
  "entities": [entityPath],
  // "timezone": 'Z',
  "cli": {
     "entitiesDir": "entities"
  }
}
export default ormconfig;