import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: 'ubuntu',
  host: '3.143.245.165',
  database: 'atelier2',
  password: 'ubuntu',
  port: 5432,
});

export default pool;
