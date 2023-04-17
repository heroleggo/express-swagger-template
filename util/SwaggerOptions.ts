import { SwaggerOptions } from 'swagger-ui-express';

const SwaggerOptions: SwaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API Docs',
            version: '1.0.0',
            description: 'API Docs',
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    apis: ['**/*.ts'],
};

export default SwaggerOptions;
