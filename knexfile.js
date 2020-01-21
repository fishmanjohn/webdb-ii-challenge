// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      // location and name of DB
      filename: './data/car-dealer.db3'
    },
    migrations: { 
      // location of migrations for the DB
      directory: './data/migrations'
    },
    seeds:{
      //location of seed data for the DB
      directory: './data/seeds'
    },
  },
};

