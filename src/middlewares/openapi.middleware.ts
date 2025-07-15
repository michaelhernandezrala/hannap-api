import * as OpenApiValidator from 'express-openapi-validator';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import type { JsonObject } from 'swagger-ui-express';
import swaggerUi from 'swagger-ui-express';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiSpecPath = path.join(__dirname, '../docs/openapi.yaml');
const handlersPath = path.join(__dirname, '../controllers/v1');

const apiSpec = yaml.load(readFileSync(apiSpecPath, 'utf8')) as JsonObject;

export const swaggerSpec = apiSpec;

export const swaggerDocs = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(apiSpec, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
  }),
};

export const openApiValidator = OpenApiValidator.middleware({
  apiSpec: apiSpecPath,
  validateRequests: true,
  validateResponses: true,
  ignorePaths: /.*\/docs$/,
  operationHandlers: handlersPath,
});
