// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'btdb',
      user:     'postgres',
      password: 'pass'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
  
};