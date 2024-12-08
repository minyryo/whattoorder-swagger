
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';
import express from 'express';

const app = express();

// Load the YAML file
const swaggerDocument = yaml.load(fs.readFileSync('./HieuPhamThiHong-WhatToOrder-1.0.1-resolved.yaml', 'utf8'));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
