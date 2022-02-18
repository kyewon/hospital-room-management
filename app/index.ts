
import { Context } from 'aws-lambda';
import {ConnectionOptions, createConnection, getConnectionManager} from "typeorm";
import createAPI from 'lambda-api';
import dotenv from 'dotenv';
import path from 'path';

import ormconfig from '../ormconfig'

const dotenvPath = path.join(__dirname, '../', `.env`);
dotenv.config({
  path: dotenvPath,
});

const v1 = createAPI({
  base: '/v1'
});
// v1.register(test, { prefix: '/test' })

export const route: any = async (event: any, context: Context) => {
  try {
    const connectionManager = getConnectionManager();
    if (!connectionManager.has("default")) {
      await createConnection(<ConnectionOptions> ormconfig);
    }
    return await v1.run(event, context)
  } catch (error) {
    throw error
  }
}