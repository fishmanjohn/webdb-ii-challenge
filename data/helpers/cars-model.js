const knex = require('knex')
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)


module.exports = {
    find,
    insert
}

function find(){
    return db('cars')
};

function insert(car){
    return db('cars').insert(car)
};