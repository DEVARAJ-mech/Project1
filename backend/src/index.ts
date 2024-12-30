import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json';
import { AppDataSource } from './data-source';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Root Route
app.get('/', (req, res) => {
    res.send('E-commerce Backend API');
});

// Initialize Data Source and Start Server
AppDataSource.initialize()
    .then(() => {
        console.log('Database connection established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
        process.exit(1);
    });
