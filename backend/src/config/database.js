require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DB_SSL,
    rejectUnauthorized: false,
  },
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
