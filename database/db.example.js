// add your details to pool and rename file to db.js
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: 'your-username',
  host: 'your-host',
  database: 'your-db-name',
  password: 'your-password',
  port: 5432,
});

export default pool;
