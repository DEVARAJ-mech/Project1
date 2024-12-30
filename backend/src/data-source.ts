import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost', // or your database host
    port: 5432,        // default PostgreSQL port
    username: 'postgres', // Updated username
    password: 'dewr58',    // Correct password
    database: 'ecommerce', // Ensure this matches your database name
    synchronize: true,
    logging: true,
    entities: ['./dist/entities/*.js'], // Adjust path if needed
    migrations: ['./dist/migrations/*.js'], // Optional
    subscribers: ['./dist/subscribers/*.js'], // Optional
});
