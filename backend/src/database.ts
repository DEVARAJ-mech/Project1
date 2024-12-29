import { DataSource } from 'typeorm';
import { Product } from './entities/Product';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost', // Update if your database is hosted elsewhere
    port: 5432,
    username: 'postgres',
    password: 'dewr58',
    database: 'Product', // Database name
    entities: [Product],
    synchronize: true, // Automatically creates the database schema. Disable in production.
    logging: false, // Set to true if you want query logs for debugging
});

export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Connected to PostgreSQL Database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Ensure the process exits if the database connection fails
    }
};
