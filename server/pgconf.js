import dotenv from "dotenv";
import pg from  'pg';

dotenv.config();

const pgPool = new pg.Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
})

export {pgPool}