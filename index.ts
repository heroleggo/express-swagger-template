import express from 'express';
import swaggerUi from 'swagger-ui-express';

import DomainController from './src/domain/DomainController';
import MainController from './src/main/MainController';

import SwaggerOptions from './util/SwaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

const swaggerSpec = swaggerJSDoc(SwaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use('/', MainController);
app.use('/domain', DomainController);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
